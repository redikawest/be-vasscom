const successResponse = (res, message, data = null) => {
    res.status(200).json({
        code: 200,
        message: message,
        data: data,
    });
};

const errorResponse = (res, message, statusCode, error = null) => {
    res.status(statusCode).json({
        code: statusCode,
        message: message,
        error: error,
    });
}

module.exports = {
    successResponse,
    errorResponse
}