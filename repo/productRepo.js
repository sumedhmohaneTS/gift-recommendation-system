const BaseRepo = require("./baseRepo");

class ProductRepo extends BaseRepo {

    constructor(mysql) {
        super(mysql);
        this.tableName = 'product';
    }

    async addProducts(params) {
        const { name, description, url, price, categoryId, image_url } = params;
        const queryObj = {
            sql: `INSERT INTO ${this.tableName}(name, description, url, price, category_id, image_url) values (?,?,?,?,?,?)`,
            params: [name, description, url, price, categoryId, image_url]

        };
        const data = await this.execute(queryObj);
        return data.insertId
    }

    async updateProducts(params) {
        const { id, name, description, url, price, categoryId, image_url } = params;
        const queryObj = {
            sql: `UPDATE ${this.tableName}
            SET ?
            WHERE id=?
            `,
            params: [{ name, description, url, price, category_id: categoryId, image_url }, id]
        };
        return await this.execute(queryObj);
    }

    async getProducts() {
        const queryObj = {
            sql: `SELECT * FROM ${this.tableName} `,
            params: {}
        };
        return await this.execute(queryObj);
    }

    async getProductById(id) {
        const queryObj = {
            sql: `SELECT * FROM ${this.tableName} where ?`,
            params: { id }
        };
        return await this.execute(queryObj);
    }

    async getProductByIds(ids) {
        const queryObj = {
            sql: `SELECT * FROM ${this.tableName} where id in (?)`,
            params: [ids]
        };
        return await this.execute(queryObj);
    }

}

module.exports = ProductRepo;