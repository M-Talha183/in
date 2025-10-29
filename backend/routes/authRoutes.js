// // const express = require('express');

// // const {registerUser, loginUser ,getUserInfo} = require('../controllers/authController.js');
// // const { protect } = require("../middleware/authMiddleware.js"); // ✅ import protect properly

// // const router = express.Router();

// // router.post('/register', registerUser);
// // router.post('/login', loginUser);
// // router.get('/user', protect, getUserInfo);

// // router.post('/upload-image',upload.single("images"), (req,res)=>{
// //     if(!req.file) {
// //         return  res.status(400).json({message: 'Please upload a file'});
// //     }
// //     const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
// //     res.status(200).json({imageUrl});
// // } );

// // module.exports = router;
// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const { registerUser, loginUser, getUserInfo } = require('../controllers/authController.js');
// const { protect } = require("../middleware/authMiddleware.js");

// const router = express.Router();

// // ✅ Multer setup
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Folder name
//   },
//   filename: (req, file, cb) => {
//     // Rename file with timestamp + original extension
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
 
// const upload = multer({ storage }); // ✅ define upload here

// // ✅ Routes
// router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.get('/user', protect, getUserInfo);

// // ✅ Upload Image Route
// router.post('/upload-image', upload.single("images"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: 'Please upload a file' });
//   }

//   const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
//   res.status(200).json({ imageUrl });
// });

// module.exports = router;


const express = require('express');
const { registerUser, loginUser, getUserInfo } = require('../controllers/authController.js');
const { protect } = require('../middleware/authMiddleware.js');
const { upload } = require('../middleware/uploadMiddleware.js'); // ✅ Import upload correctly

const router = express.Router();

// ✅ Auth routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', protect, getUserInfo);

// ✅ Image upload route
router.post('/upload-image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Please upload a file' });
  }

  const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  res.status(200).json({ imageUrl });
});

module.exports = router;
