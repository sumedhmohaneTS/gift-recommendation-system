module.exports = {
    activeEnv: 'STAGING',
    services: {
        recommendationService: {
            endpoint: 'http://giftpickr.com/ml-api',
            createProductMetadataPath: '/product-metadata',
            getRecommendationPath: '/recommendation'
        }
    }
};