const BaseRepo = require("./baseRepo");

class FeaturedProductRepo extends BaseRepo {

    constructor(mysql) {
        super(mysql);
    }

    async getFeaturedProducts() {
        const queryObj = {
            sql: `SELECT * FROM featured_product order by seqNo`,
            params: {}
        };
        return await this.execute(queryObj);
    }

}

module.exports = FeaturedProductRepo;