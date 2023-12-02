const router = require('express').Router();

// Import the homeRoutes module
const homeRoutes = require('./homeRoutes');

// Import the api module
const apiRoutes = require('./api');

// Use the homeRoutes module for requests to the root URL ('/')
router.use('/', homeRoutes);

// Use the apiRoutes module for requests to the '/api' URL
router.use('/api', apiRoutes);

// Export the router object to make it available for other files
module.exports = router;
