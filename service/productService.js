class ProductService {

    constructor(productRepo, categoryService, recommendationService) {
        this.repo = productRepo;
        this.categoryService = categoryService;
        this.recommendationService = recommendationService;
    }

    async addProducts(data) {
        console.log(data);
        const { id, name, description, url, price, category, image_url, age, gender, interest, occasions, relationships } = data;

        const categoryData = await this.categoryService.getCategoryByName(category);
        const { id: categoryId } = categoryData;

        if (id) {
            await this.repo.updateProducts({ id, name, description, url, price, categoryId, image_url });
            return;
        }
        const productId = await this.repo.addProducts({ name, description, url, price, categoryId, image_url });
        await this.recommendationService.createProductMetadata({ product_id: productId, age, gender, interest, occasions, relationships });
    }

    async getProducts() {
        return await this.repo.getProducts();
    }

}

module.exports = ProductService;