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
            occasions, relationships, featured } = data;

        const categoryData = await this.categoryService.getCategoryByName(category);
        const { id: categoryId } = categoryData;

        if (id) {
            await this.repo.updateProducts({ id, name, description, url, price, categoryId, image_url });
            return;
        }
        const productId = await this.repo.addProducts({ name, description, url, price, categoryId, image_url });
        await this.recommendationService.createProductMetadata({ product_id: productId, minAge, maxAge, gender, interests, occasions, relationships });

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
        const productIds = await this.recommendationService.getRecommendation(age, gender, occasion, relationship, interests);
        return await this.getProductsByIds(productIds);
    }

}

module.exports = ProductService;