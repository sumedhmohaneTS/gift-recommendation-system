class RecommendationService {

    constructor(envConfig, http) {
        this.envConfig = envConfig;
        this.http = http;
        this.endPoint = envConfig.services.recommendationService.endpoint;
        this.createProductMetadataPath = envConfig.services.recommendationService.createProductMetadataPath;
        this.getRecommendationPath = envConfig.services.recommendationService.getRecommendationPath;
    }

    async createProductMetadata(data) {
        const url = `${this.endPoint}${this.createProductMetadataPath}`;
        Object.keys(data).forEach(key => data[key] === undefined && delete data[key]);
        try {
            const resp = await this.http.post({
                url,
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            });
            return resp;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getRecommendation(age, gender, occasion, relationship, interests) {
        const url = `${this.endPoint}${this.getRecommendationPath}`;
        try {
            const resp = await this.http.get({
                url,
                method: 'GET',
                qs: {  // Query string like ?key=value&...
                    age, gender, occasion, relationship, interests
                }
            });
            const data = JSON.parse(resp);
            return data.data.productIds;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = RecommendationService;