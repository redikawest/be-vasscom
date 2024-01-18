const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');


router.get('/user', UserController.list);
router.get('/user/:userId', UserController.detail);
router.post('/user', UserController.create);
router.put('/user/:userId', UserController.update);
router.delete('/user/:userId', UserController.deleteUser);

module.exports = router;