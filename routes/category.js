const express = require('express');
const router = express.Router();

const { 
    requireSignin,
    isAuth, 
    isAdmin
} = require('../controllers/auth');

const { userById } = require('../controllers/user');

const { 
    create 
} = require('../controllers/category');

router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);

module.exports = router;