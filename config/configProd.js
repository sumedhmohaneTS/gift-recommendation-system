module.exports = {
    activeEnv: 'PRODUCTION',
    services: {
        recommendationService: {
            endpoint: 'https://giftpickr.com/ml-api',
            createProductMetadataPath: '/product-metadata',
            getRecommendationPath: '/recommendation'
        }
    }
};