class BaseRepo {

    constructor(mysql) {
        this.mysql = mysql;
    }

    async execute(queryObj) {
        let connection;
        try {
            const pool = await this.mysql;
            connection = await pool.getConnection();
            const { sql, params } = queryObj;
            const result = await connection.query(sql, params);
            return result[0] || [];
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            if (connection) {
                await connection.release();
            }
        }
    }
}

module.exports = BaseRepo;