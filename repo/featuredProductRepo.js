const BaseRepo = require("./baseRepo");

class FeaturedProductRepo extends BaseRepo {

    constructor(mysql) {
        super(mysql);
        this.tableName = 'featured_product';
    }

    async getFeaturedProducts() {
        const queryObj = {
            sql: `SELECT p.*,c.name as categoryName FROM ${this.tableName} fp LEFT JOIN product p on fp.product_id=p.id LEFT JOIN category c on p.category_id=c.id  order by seqNo`,
            params: {}
        };
        return await this.execute(queryObj);
    }

    async addFeaturedProducts(params) {
        const { productId } = params;
        const queryObj = {
            sql: `INSERT INTO ${this.tableName}(product_id, seqNo) values (?,?)`,
            params: [productId, 1]

        };
        const data = await this.execute(queryObj);
        return data.insertId
    }

}

module.exports = FeaturedProductRepo;