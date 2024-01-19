const { STATUS_ACTIVE } = require("../helpers/constant");
const { successResponse, errorResponse } = require("../helpers/response");
const User = require('../models').users;
const Product = require('../models').products;

const countData = async (req, res) => {
    try {
        
        return successResponse(res, "Success", {
            user: await User.count(),
            user_active: await User.count({
                where:{
                    status_id: STATUS_ACTIVE
                }
            }),
            product: await Product.count(),
            product_active: await Product.count({
                where:{
                    status_id: STATUS_ACTIVE
                }
            })
        })

    } catch (error) {
        console.error('Error:', error);
        return errorResponse(res, "Internal Server Error", 500);
    }
}

module.exports = {
    countData
}