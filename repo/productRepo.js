const BaseRepo = require("./baseRepo");

class ProductRepo extends BaseRepo {

    constructor(mysql) {
        super(mysql);
    }

    async getProducts() {
        const queryObj = {
            sql: `SELECT * FROM Product `,
            params: {}
        };
        return await this.execute(queryObj);
    }

}

module.exports = ProductRepo;