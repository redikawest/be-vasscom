const { ROLE_USER } = require("../../helpers/constant");
const { errorResponse } = require("../../helpers/response");
const jwt = require('jsonwebtoken');
const User = require('../../models').users;

const verifyToken = (req, res, next) => {

    let tokenHeader = req.headers['authorization'];
    if(!tokenHeader) {
        return errorResponse(res, "Required Authorization", 403)
    }

    let token = tokenHeader.split(' ')[1];
    if (!token) {
        return errorResponse(res, "Required Authorization", 403)
    }

    if (tokenHeader.split(' ')[0] !== 'Bearer') {
        return errorResponse(res, "Incorrect token format", 500)
    }

    jwt.verify(token, 'privateKey', (err, decoded) => {
        if (err) {
            return errorResponse(res, "Error", 500)
        }
        req.userId = decoded.id;
        next();
    });
}

const isAdmin = async (req, res, next) => {
    const user = await User.findByPk(req.userId);
    if(user.role_id == ROLE_USER) {
        return errorResponse(res, "Require Admin Role", 400)
    }

    next();
}

module.exports = {
    verifyToken,
    isAdmin
}