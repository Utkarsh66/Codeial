const express = require('express');

const router = express.Router();

const signupController = require('../controllers/signup_controller');
console.log("Before signup controller line");
router.get('/signup',signupController.GetSignupPage);

module.exports = router;