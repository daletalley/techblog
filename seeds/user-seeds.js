// Importing the User model from '../models'
const { User } = require('../models');

// Array of user data to be seeded
const userData = [
  {
    username: "user1",
    password: "password123"
  },
  {
    username: "user2",
    password: "password123"
  },
  // Add more seed data as needed
];

// Function to seed the users by bulk creating them using the User model
const seedUsers = () => User.bulkCreate(userData);

// Exporting the seedUsers function to be used in other files
module.exports = seedUsers;
