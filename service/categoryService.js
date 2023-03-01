class CategoryService {

    constructor(categoryRepo) {
        this.repo = categoryRepo;
    }


    async getCategoryByName(name) {
        const data = await this.repo.getCategoryByName(name);
        return data || await this.createCategory(name);
    }

    async createCategory(name) {
        return await this.repo.createCategory(name);
    }

}

module.exports = CategoryService;