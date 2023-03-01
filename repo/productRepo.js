const BaseRepo = require("./baseRepo");

class ProductRepo extends BaseRepo {

    constructor(mysql) {
        super(mysql);
    }

    async addProducts(params) {
        const { name, description, url, price, categoryId, image_url } = params;
        const queryObj = {
            sql: `INSERT INTO Product(name, description, url, price, category_id, image_url) values (?,?,?,?,?,?)`,
            params: [name, description, url, price, categoryId, image_url]

        };
        const data = await this.execute(queryObj);
        return data.insertId
    }

    async updateProducts(params) {
        const { id, name, description, url, price, categoryId, image_url } = params;
        const queryObj = {
            sql: `UPDATE Product
            SET ?
            WHERE id=?
            `,
            params: [{ name, description, url, price, category_id: categoryId, image_url }, id]
        };
        return await this.execute(queryObj);
    }

    async getProducts() {
        const queryObj = {
            sql: `SELECT * FROM Product `,
            params: {}
        };
        return await this.execute(queryObj);
    }

    async getProductById(id) {
        const queryObj = {
            sql: `SELECT * FROM Product where ?`,
            params: { id }
        };
        return await this.execute(queryObj);
    }

}

module.exports = ProductRepo;