const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
router.post('/submit',userController.createUser);
router.get('/getData',userController.getData)
router.put('/editData',userController.editData)
router.delete('/deleteData',userController.deleteData)
module.exports = router;