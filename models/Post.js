const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Post model creation
class Post extends Model {}

// Defining fields and configuration for Post model
Post.init(
  {
    // Define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define a title column
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define a content column
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Define a user_id column to establish a relationship with the User model
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
