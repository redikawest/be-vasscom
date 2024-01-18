const { successResponse } = require("../helpers/response");

const list = (req, res) => {
    const responseData = { message: 'Greetings from the API Controller!' };

    return successResponse(res, 'List Product', responseData);
};

const detail = (req, res) => {
    res.json({ message: 'Detail Product' });
}

const create = (req, res) => {
    res.json({ message: 'Create Product' });
}

const update = (req, res) => {
    res.json({ message: 'Update Product' });
}

const deleteProduct = (req, res) => {
    res.json({ message: 'Delete Product' });
}

module.exports = {
    list,
    detail,
    create,
    update,
    deleteProduct
};