const userController = require('./userController');
const express = require('express');
const s3 = require('../config/s3');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/sign_s3', s3.createURL);
router.get('/:userId', userController.getUserbyId);
router.post('/', userController.createUser);
router.put('/avatar', userController.saveAvatar);
router.put('/:userId', userController.editUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
