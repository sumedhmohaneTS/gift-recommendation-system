const BaseRepo = require("./baseRepo");

class FeaturedProductRepo extends BaseRepo {

    constructor(mysql) {
        super(mysql);
    }

    async getFeaturedProducts() {
        const queryObj = {
            sql: `SELECT p.* FROM featured_product fp LEFT JOIN PRODUCT p on fp.product_id=p.id  order by seqNo`,
            params: {}
        };
        return await this.execute(queryObj);
    }

    async addFeaturedProducts(params) {
        const { productId } = params;
        const queryObj = {
            sql: `INSERT INTO featured_product(product_id, seqNo) values (?,?)`,
            params: [productId, 1]

        };
        const data = await this.execute(queryObj);
        return data.insertId
    }

}

module.exports = FeaturedProductRepo;