const BaseRepo = require("./baseRepo");

class CategoryRepo extends BaseRepo {

    constructor(mysql) {
        super(mysql);
    }

    async createCategory(name) {
        const queryObj = {
            sql: `INSERT INTO Category(name) values (?)`,
            params: [name]

        };
        await this.execute(queryObj);
        return this.getCategoryByName(name);
    }

    async getCategoryByName(name) {
        const queryObj = {
            sql: `SELECT * FROM Category where ? `,
            params: { name }
        };
        const result = await this.execute(queryObj);
        return result[0] || {};
    }

}

module.exports = CategoryRepo;