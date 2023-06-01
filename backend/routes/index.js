const express = require('express');
const authController = require('../controller/authController');
const blogController = require('../controller/blogController');
const commentController = require('../controller/commentController');
const auth = require('../middleware/auth');

const router = express.Router();

// testing

router.get('/test', (req, res) => res.json({msg: 'this is testing endpoint'}));

// user

// register
router.post('/register', authController.register);

// login
router.post('/login', authController.login);

// logout
router.post('/logout', auth, authController.logout);

// refresh
router.get('/refresh', authController.refresh);

// blog


// CRUD
// create
router.post('/blog', auth,  blogController.create);
// update
router.put('/blog', auth, blogController.update);

// read all blogs
router.get('/blog/all', auth, blogController.getAll);

// read blog by id
router.get('/blog/:id', auth, blogController.getById);

// delete
router.delete('/blog/:id', auth, blogController.delete);

// comment
// create 
router.post('/comment', auth, commentController.create);

// get   
router.get('/comment/:id', auth, commentController.getById);


module.exports = router;