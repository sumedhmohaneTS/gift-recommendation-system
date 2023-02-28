class ProductService {

    constructor(productRepo) {
        this.repo = productRepo;
    }

    async getProducts() {
        return await this.repo.getProducts();
    }

}

module.exports = ProductService;