const userController = require('./userController');
const router = require('express').Router();

// User CRUD routes
router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserbyId);
router.post('/', userController.createUser);
router.put('/', userController.editUser);
router.delete('/', userController.deleteUser);

// User avatar routes
router.post('/avatar', userController.saveAvatarURL);
router.get('/avatar/:userId', userController.getAvatarURL);

module.exports = router;
