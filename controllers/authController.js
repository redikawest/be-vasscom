const { validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { errorResponse, successResponse } = require("../helpers/response");
const { STATUS_ACTIVE, ROLE_USER } = require("../helpers/constant");
const User = require('../models').users;

const login = async (req, res) => {

    const { email, password } = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errorResponse(res, "validation Error", 400, errors.array())
    }

    try {

        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return errorResponse(res, "User Not Found", 404);
        }

        const validatePassword = await bcrypt.compare(password, user.password);
        if(!validatePassword) {
            return errorResponse(res, "Wrong Password", 400);
        }

        const token = 'Bearer ' + jwt.sign({id: user.id}, 'privateKey', {expiresIn: 86400});

        return successResponse(res, "Success Login", {
            token: token,
            name: user.name,
            role: user.role_id
        })
        
    } catch (error) {
        console.error('Error:', error);
        return errorResponse(res, "Internal Server Error", 500);
    }

}

const register = async (req, res) => {

    const { name, email, phone_number } = req.body
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

        // Send Email Password

        return successResponse(res, "Success Register", newUser);
        
    } catch (error) {
        console.error('Error:', error);
        return errorResponse(res, "Internal Server Error", 500);
    }

}

module.exports = {
    login, register
}