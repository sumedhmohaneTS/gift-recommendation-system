const BaseAPI = require("../baseApi");

class ExternalApiHandler extends BaseAPI {
    constructor(productService, featuredProductService) {
        super();
        this.productService = productService;
        this.featuredProductService = featuredProductService;
    }
    async addProducts(req, res) {
        const { body } = req;
        await this.productService.addProducts(body);
        return this.sendSuccess(res, "Success");
    }

}

module.exports = ExternalApiHandler;
