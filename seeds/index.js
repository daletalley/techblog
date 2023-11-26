// Importing the seed functions for users, posts, and comments
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

// Function to seed the database with users, posts, and comments
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  // Seed users
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  // Seed posts
  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  // Seed comments
  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

// Call the seedAll function to start seeding the database
seedAll();
