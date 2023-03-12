class ProductService {

    constructor(productRepo, categoryService, recommendationService, featuredProductService) {
        this.repo = productRepo;
        this.categoryService = categoryService;
        this.recommendationService = recommendationService;
        this.featuredProductService = featuredProductService;
    }

    async addProducts(data) {
        console.log(data);
        const { id, name, description, url, price,
            category, image_url, minAge, maxAge, gender, interests,
            occasions, relationships, featured, rating, no_of_reviews } = data;

        const categoryData = await this.categoryService.getCategoryByName(category);
        const { id: categoryId } = categoryData;

        if (id) {
            await this.repo.updateProducts({ id, name, description, url, price, categoryId, image_url });
            return;
        }
        const productId = await this.repo.addProducts({ name, description, url, price, categoryId, image_url });
        await this.recommendationService.createProductMetadata({ product_id: productId, minAge, maxAge, gender, interests, occasions, relationships, rating, no_of_reviews, price });

        if (featured) {
            await this.featuredProductService.addFeaturedProducts({ productId });
        }
    }

    async getProducts() {
        return await this.repo.getProducts();
    }

    async getProductsByIds(ids) {
        return await this.repo.getProductByIds(ids);
    }

    async getRecommendedProducts(age, gender, occasion, relationship, interests) {
        const response = await this.recommendationService.getRecommendation(age, gender, occasion, relationship, interests);
        const productIds = response.productIds
        const productMetadata = response.products
        if (productIds.length > 0) {
            const allProducts = await this.getProductsByIds(productIds);
            allProducts.forEach(product => product['metadata'] = productMetadata[product.id])
            return allProducts
        }
        return [];
    }

}

module.exports = ProductService;