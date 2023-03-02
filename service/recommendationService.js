class RecommendationService {

    constructor(envConfig, http) {
        this.envConfig = envConfig;
        this.http = http;
        this.endPoint = envConfig.services.recommendationService.endpoint;
        this.createProductMetadataPath = envConfig.services.recommendationService.createProductMetadataPath;
    }

    async createProductMetadata(data) {
        const url = `${this.endPoint}${this.createProductMetadataPath}`;
        try {
            const resp = await this.http.post({
                url,
                method: 'POST',
                body: data,
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

    async getRecommendation(data) {
        const url = `${this.endPoint}${this.getRecommendationPath}`;
        try {
            const resp = await this.http.post({
                url,
                method: 'POST',
                body: data,
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
}

module.exports = RecommendationService;