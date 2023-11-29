const User = require('../models/user');

const userData = [
        {
            username: "daletalley",
            password: "00000",
        },
        {
            username: "markzuckerberg",
            password: "11111",
        },
        {
            username: "billgates",
            password: "22222",
        },
        {
            username: "elonmusk",
            password: "33333",
        },
    ];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;