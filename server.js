const express = require('express');
const homeRoutes = require('./controllers/homeRoutes');
const commentRoutes = require('./controllers/api/commentsRoutes.js');
const postRoutes = require('./controllers/api/postRoutes.js');
const userRoutes = require('./controllers/api/userRoutes');
const sequelize = require('./config/connections.js');
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3009;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Set up session with Sequelize
const sess = {
    secret: 'TopSecret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

module.exports = app;
