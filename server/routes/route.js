const express = require('express');
const router = express.Router();
const controllers = require('../controllers/getUsers');

router.post('/users', controllers.getUserAPI);

module.exports = router;
