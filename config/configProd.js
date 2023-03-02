module.exports = {
    activeEnv: 'PRODUCTION',
    services: {
        recommendationService: {
            endpoint: 'http://giftpickr.com/ml-api',
            createProductMetadataPath: '/product-metadata',
            getRecommendationPath: '/recommendation'
        }
    }
};