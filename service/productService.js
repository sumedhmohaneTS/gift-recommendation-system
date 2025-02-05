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

    async getRecommendedProducts(age, gender, occasion, relationship, interests, minPrice, maxPrice) {
        const response = await this.recommendationService.getRecommendation(age, gender, occasion, relationship, interests, minPrice, maxPrice);
        if (!response) {
            return {}
        }
        let productIds = response.productIds
        let productMetadata = response.products
        const data = {}
        if (productIds.length > 0) {
            const allProducts = await this.getProductsByIds(productIds);
            allProducts.forEach(product => product['metadata'] = productMetadata[product.id])
            data.mainProducts = allProducts
        }

        productIds = response.otherProductIds
        productMetadata = response.otherProducts
        if (productIds.length > 0) {
            const allOtherProducts = await this.getProductsByIds(productIds);
            allOtherProducts.forEach(product => product['metadata'] = productMetadata[product.id])
            data.otherProducts = allOtherProducts
        }
        return data;
    }

}

module.exports = ProductService;