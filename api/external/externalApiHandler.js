const BaseAPI = require("../baseApi");

class ExternalApiHandler extends BaseAPI {
    constructor(productService, featuredProductService) {
        super();
        this.productService = productService;
        this.featuredProductService = featuredProductService;
    }
    async getProducts(req, res) {
        const data = await this.productService.getProducts();
        return this.sendSuccess(res, data);
    }

    async getFeaturedProducts(req, res) {
        const data = await this.featuredProductService.getFeaturedProducts();
        return this.sendSuccess(res, data);
    }
    async getRecommendedProducts(req, res) {
        console.log(req);
        const { age, gender, occasion, relationship, interests } = req.body;
        const data = await this.productService.getRecommendedProducts(age, gender, occasion, relationship, interests);
        return this.sendSuccess(res, data);
    }
}

module.exports = ExternalApiHandler;
