const { validationResult } = require("express-validator");
const { successResponse, errorResponse } = require("../helpers/response");
const User = require('../models').users;
const { STATUS_ACTIVE, ROLE_USER } = require("../helpers/constant");
const bcrypt = require('bcrypt');

const list = async (req, res) => {
    try {

        const users = await User.findAll();
    
        return successResponse(res, "Success", users);
        
    } catch (error) {
        console.error('Error:', error);
        return errorResponse(res, "Error retrieving users", 500);
    }
};

const detail = async (req, res) => {

    const { userId } = req.params;

    try {

        const user = await User.findByPk(userId);
        if(!user) {
            return errorResponse(res, "User Not Found", 404);
        }

        return successResponse(res, "Success", user);
        
    } catch (error) {
        console.error('Error:', error);
        return errorResponse(res, "Error retrieving user details!", 500);
    }
}

const create = async (req, res) => {

    const { name, email, phone_number } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return errorResponse(res, "validation Error", 400, errors.array())
    }

    try {

        const newUser = await User.create({
            name, email, phone_number,
            status_id: STATUS_ACTIVE,
            role_id: ROLE_USER,
            password: await bcrypt.hash('rahasia', 10)
        });

        return successResponse(res, "Success Create User", newUser);
        
    } catch (error) {
        console.error('Error:', error);
        return errorResponse(res, "Error Create User", 500);
    }
}

const update = async (req, res) => {

    const { userId } = req.params;
    const { name, email, phone_number } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return errorResponse(res, "validation Error", 400, errors.array())
    }

    try {

        const user = await User.findByPk(userId);
        if(!user) {
            return errorResponse(res, "User Not Found", 404);
        }

        await user.update({
            name, email, phone_number,
            status_id: STATUS_ACTIVE,
            role_id: ROLE_USER,
        });

        return successResponse(res, "Success Update User", user);
        
    } catch (error) {
        console.error('Error:', error);
        return errorResponse(res, "Error Update User", 500);
    }
}

const deleteUser = async (req, res) => {

    const { userId } = req.params;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return errorResponse(res, "validation Error", 400, errors.array())
    }

    try {

        const user = await User.findByPk(userId);
        if(!user) {
            return errorResponse(res, "User Not Found", 404);
        }

        await user.destroy();

        return successResponse(res, "Success Delete User");
        
    } catch (error) {
        console.error('Error:', error);
        return errorResponse(res, "Error Delete User", 500);
    }
}

module.exports = {
    list,
    detail,
    create,
    update,
    deleteUser
};