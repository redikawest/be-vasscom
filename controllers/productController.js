const { validationResult } = require("express-validator");
const { successResponse, errorResponse } = require("../helpers/response");
const { STATUS_ACTIVE } = require("../helpers/constant");
const Product = require('../models').products;

const list = async (req, res) => {
    
    const { skip = 1, take = 10 } = req.query;
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errorResponse(res, "validation Error", 400, errors.array())
    }

    try {

        const offset = (skip - 1) * take;

        const products = await Product.findAll({
            offset,
            limit: parseInt(take, 10),
            order: [['id', 'DESC']],
        });
    
        return successResponse(res, "Success", products);

    } catch (error) {
        console.error('Error:', error);
        return errorResponse(res, "Error retrieving product list!", 500);
    }
};

const detail = async (req, res) => {

    const { productId } = req.params;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errorResponse(res, "validation Error", 400, errors.array())
    }

    try {

        const product = await Product.findByPk(productId);
        if(!product) {
            return errorResponse(res, "Product Not Found", 404);
        }

        return successResponse(res, "Success", product);
        
    } catch (error) {
        console.error('Error:', error);
        return errorResponse(res, "Error retrieving product details!", 500);
    }
}

const create = async (req, res) => {

    const { body } = req;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errorResponse(res, "validation Error", 400, errors.array())
    }

    try {

        const newProduct = await Product.create({
            name: body.name,
            price: body.price,
            image: body.image,
            status_id: STATUS_ACTIVE
        });

        return successResponse(res, "Success Create Product", newProduct);

    } catch (error) {
        console.error('Error:', error);
        return errorResponse(res, "Error Create Product", 500);
    }
}

const update = async (req, res) => {
    
    const { productId } = req.params;
    const { body } = req

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errorResponse(res, "validation Error", 400, errors.array())
    }

    try {

        const product = await Product.findByPk(productId);
        if(!product) {
            return errorResponse(res, "Product Not Found", 404);
        }

        await product.update({
            name: body.name,
            price: body.price,
            image: body.image,
            status_id: STATUS_ACTIVE
        });

        return successResponse(res, "Success Update Product", product);
        
    } catch (error) {
        console.error('Error:', error);
        return errorResponse(res, "Error Update Product", 500);
    }
}

const deleteProduct = async (req, res) => {
    
    const { productId } = req.params;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errorResponse(res, "validation Error", 400, errors.array())
    }

    try {

        const product = await Product.findByPk(productId);
        if(!product) {
            return errorResponse(res, "Product Not Found", 404);
        }

        await product.destroy();

        return successResponse(res, "Success Delete Product");
        
    } catch (error) {
        console.error('Error:', error);
        return errorResponse(res, "Error Delete Product", 500);
    }

}

module.exports = {
    list,
    detail,
    create,
    update,
    deleteProduct
};