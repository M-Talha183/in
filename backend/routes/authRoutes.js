const express = require('express');

const {registerUser, loginUser ,getUserInfo} = require('../controllers/authController.js');
const { protect } = require("../middleware/authMiddleware.js"); // ✅ import protect properly

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', protect, getUserInfo);

module.exports = router;