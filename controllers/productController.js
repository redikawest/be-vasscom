const { successResponse, errorResponse } = require("../helpers/response");
const Product = require('../models').products;

const list = (req, res) => {
    const responseData = { message: 'Greetings from the API Controller!' };

    return successResponse(res, 'List Product', responseData);
};

const detail = async (req, res) => {
    try {

        const product = await Product.findByPk(req.params.productId);
        if(!product) {
            return errorResponse(res, "Product Not Found", 404);
        }

        return successResponse(res, "oke");
        
    } catch (error) {
        console.error('Error:', error);
        return errorResponse(res, "Error retrieving product details!", 500);
    }
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