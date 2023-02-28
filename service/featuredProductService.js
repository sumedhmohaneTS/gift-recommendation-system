class FeaturedProductService {

    constructor(featuredProductRepo) {
        this.repo = featuredProductRepo;
    }

    async getFeaturedProducts() {
        return await this.repo.getFeaturedProducts();
    }

}

module.exports = FeaturedProductService;