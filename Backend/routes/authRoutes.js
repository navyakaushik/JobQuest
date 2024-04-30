const express = require('express');
const { signin } = require('../controllers/authController');
const router = express.Router();


//auth routes
//router.get('/', signin);

// /api/signup
router.post('/signup', signup);
// /api/signin
router.post('/signin', signin);
// /api/logout
router.get('/logout', logout);
// /api/me
router.get('/me', isAuthenticated, userProfile);

module.exports = router;