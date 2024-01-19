const express = require('express');
const router = express.Router();
const HomepageController = require('../controllers/homepageController');

router.get('/homepage/count', HomepageController.countData);

module.exports = router;