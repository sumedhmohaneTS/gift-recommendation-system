class FeaturedProductService {

    constructor(featuredProductRepo) {
        this.repo = featuredProductRepo;
    }

    async getFeaturedProducts() {
        return await this.repo.getFeaturedProducts();
    }

    async addFeaturedProducts(params) {
        return await this.repo.addFeaturedProducts(params);
    }

}

module.exports = FeaturedProductService;