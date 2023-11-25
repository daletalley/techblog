// Importing the Sequelize constructor from the library
const Sequelize = require('sequelize');

// Importing environment variables for secure configuration
require('dotenv').config();

// Setting up the connection to the database using Sequelize
let sequelize;

// Using JawsDB for Heroku deployment if available, else local MySQL
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME, // Database name
    process.env.DB_USER, // User
    process.env.DB_PASSWORD, // Password
    {
      host: 'localhost', // Database host
      dialect: 'mysql', // Using MySQL
      port: 3306, // Port for the database
      dialectOptions: {
        decimalNumbers: true, // Ensuring precision for decimal numbers
      },
    },
  );
}

// Exporting the configured Sequelize instance for use in other files
module.exports = sequelize;
