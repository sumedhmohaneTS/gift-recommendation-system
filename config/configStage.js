module.exports = {
    activeEnv: 'STAGING',
    services: {
        recommendationService: {
            endpoint: 'https://giftpickr.com/ml-api',
            createProductMetadataPath: '/product-metadata',
            getRecommendationPath: '/recommendation'
        }
    }
};