const { User } = require('../models');

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

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
