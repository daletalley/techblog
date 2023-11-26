// Middleware function to check if user is authenticated
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        // If user is not authenticated, redirect to login page
        res.redirect('/login');
    } else {
        // If user is authenticated, proceed to the next middleware
        next();
    }
};

module.exports = withAuth;
