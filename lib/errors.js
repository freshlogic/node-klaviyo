'use strict';

class KlaviyoError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class KlaviyoConfigurationError extends KlaviyoError {}

class KlaviyoApiError extends KlaviyoError {
    constructor(statusCode, data) {
        super(`Request failed with status code: ${statusCode}`);
        this.statusCode = statusCode;
        this.data = data;
    }
}

class KlaviyoAuthenticationError extends KlaviyoApiError {}

class KlaviyoRateLimitError extends KlaviyoApiError {
    constructor(statusCode, data, retryAfter) {
        super(statusCode, data);
        this.retryAfter = retryAfter;
    }
}

class KlaviyoServerError extends KlaviyoApiError {}

module.exports = {
    KlaviyoError,
    KlaviyoConfigurationError,
    KlaviyoApiError,
    KlaviyoAuthenticationError,
    KlaviyoRateLimitError,
    KlaviyoServerError
};
