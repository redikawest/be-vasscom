const successResponse = (res, message, data = null) => {
    res.status(200).json({
        code: 200,
        message: message,
        data: data,
    });
};

const errorResponse = (res, message, statusCode) => {
    res.status(statusCode).json({
        code: statusCode,
        message: message,
        data: null,
    });
}

module.exports = {
    successResponse,
    errorResponse
}