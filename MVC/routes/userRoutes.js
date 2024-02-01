const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
router.post('/submit',userController.createUser);
router.get('/getData',userController.getuserData)
router.get('/editData',userController.editData)
router.get('/deleteData',userController.deleteData)
module.exports = router;