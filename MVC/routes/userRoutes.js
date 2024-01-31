const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
router.post('/submit',userController.createUser);
router.get('/getData',userController.getuserData)
module.exports = router;