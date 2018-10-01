const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');

router
    .get('/', userCtrl.listAllUsers)
    .get('/:id', userCtrl.getUser)
    .post('/', userCtrl.addUser)
    .delete('/:id', userCtrl.deleteUser)
    .put('/:id', userCtrl.updateUserInfo)



module.exports = router;