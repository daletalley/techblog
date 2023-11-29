const Comment = require('../models/comment');

const commentData = [
    {
        description: "Amazing!",
        post_id: 1,
        user_id: 1,
    },
    {
        description: "Yes!",
        post_id: 3,
        user_id: 2,
    },
    {
        description: "Nice!",
        post_id: 2,
        user_id: 4,
    },
    {
        description: "Cool!",
        post_id: 4,
        user_id: 2,
    },
    {
        description: "Awesome!",
        post_id: 4,
        user_id: 3,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;