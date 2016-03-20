const userController = require('./userController');
const express = require('express');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserbyId);
router.post('/', userController.createUser);
router.put('/:userId', userController.editUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
