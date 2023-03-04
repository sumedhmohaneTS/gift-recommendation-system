module.exports = {
    activeEnv: 'DEVELOPMENT',
    services: {
        recommendationService: {
            endpoint: 'http://127.0.0.1:5000/ml-api',
            createProductMetadataPath: '/product-metadata',
            getRecommendationPath: '/recommendation'
        }
    }
};