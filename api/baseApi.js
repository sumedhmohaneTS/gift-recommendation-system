class BaseAPI {
    constructor() {
        this.statusCode = null;
        this.response = null;
    }

    sendResponse(res, statusCode, response) {
        res.status(statusCode).json(response);
    }

    sendError(res, statusCode, message) {
        this.sendResponse(res, statusCode, { error: message });
    }

    sendSuccess(res, data) {
        this.sendResponse(res, 200, { data: data });
    }

    sendBadRequest(res, message) {
        this.sendError(res, 400, message);
    }

    sendNotFound(res, message) {
        this.sendError(res, 404, message);
    }

    sendServerError(res, message) {
        this.sendError(res, 500, message);
    }
}

module.exports = BaseAPI