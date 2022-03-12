const express = require('express');
const router = express.Router();

const { userSignupValidator } = require('../validator');
const { 
    signup, 
    signin, 
    signout, 
    requireSignin 
} = require('../controllers/auth');

router.post('/users/signup', userSignupValidator, signup);
router.post('/users/signin', signin);
router.get('/users/signout', signout);

module.exports = router;