const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const UserValidation = require('../middleware/validation/userValidation');

router.get('/user', UserValidation.listUserValidation, UserController.list);
router.get('/user/:userId', UserValidation.detailUserValidation, UserController.detail);
router.post('/user', UserValidation.createUserValidation, UserController.create);
router.put('/user/:userId', UserValidation.updateUserValidation, UserController.update);
router.delete('/user/:userId', UserValidation.deleteUserValidation, UserController.deleteUser);

module.exports = router;