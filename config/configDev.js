module.exports = {
    activeEnv: 'DEVELOPMENT',
    services: {
        recommendationService: {
            endpoint: 'http://giftpickr.com/ml-api',
            createProductMetadataPath: '/product-metadata',
            getRecommendationPath: '/recommendation'
        }
    }
};