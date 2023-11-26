// Import necessary modules
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts for the homepage
router.get('/', async (req, res) => {
  try {
    // Retrieve all posts from the database, including associated user data
    const postData = await Post.findAll({
      include: [{ model: User }],
    });

    // Convert the retrieved data into plain JavaScript objects
    const posts = postData.map((post) => post.get({ plain: true }));

    // Render the 'homepage' view and pass the posts data and logged_in status to the view
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    // Handle any errors that occur during the database operation
    res.status(500).json(err);
  }
});

// Export the router module
module.exports = router;
