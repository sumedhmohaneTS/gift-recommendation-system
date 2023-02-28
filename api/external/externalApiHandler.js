const BaseAPI = require("../BaseApi");

class ExternalApiHandler extends BaseAPI {
    constructor(productService) {
        super();
        this.service = productService;
    }
    async getProducts(req, res) {
        const data = await this.service.getProducts();
        return this.sendSuccess(res, data);
    }
}

module.exports = ExternalApiHandler;
