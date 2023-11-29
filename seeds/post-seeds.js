const Post = require('../models/post');

const postData = [
        {
            user_id: 4,
            title: "SpaceX's Journey to Mars",
            description: "Exploring SpaceX's ambitious plans to colonize Mars and make humanity an interplanetary species.",
            time: "2024-11-11",
        },
        {
            user_id: 3,
            title: "Microsoft's Quantum Computing Breakthrough",
            description: "Understanding Microsoft's recent breakthrough in quantum computing and its potential applications in various fields.",
            time: "2024-10-12",
        },
        {
            user_id: 2,
            title: "Facebook's Impact on Social Media",
            description: "Examining the influence of Facebook on the evolution of social media and its effects on society.",
            time: "2024-10-03",
        },
        {
            user_id: 4,
            title: "SpaceX's Starship Prototype",
            description: "Analyzing the development and testing of SpaceX's Starship prototype for future space exploration missions.",
            time: "2024-10-01",
        },
        {
            user_id: 3,
            title: "Microsoft's Azure Cloud Services",
            description: "Exploring the features and benefits of Microsoft's Azure cloud services for businesses and developers.",
            time: "2024-12-10",
        },
        {
            user_id: 2,
            title: "Facebook's Privacy Controversies",
            description: "Investigating the privacy controversies surrounding Facebook and its impact on user trust and data protection.",
            time: "2024-07-06",
        },
        {
            user_id: 4,
            title: "SpaceX's Starlink Satellite Network",
            description: "Examining the deployment and potential benefits of SpaceX's Starlink satellite network for global internet connectivity.",
            time: "2024-05-17",
        },
        {
            user_id: 3,
            title: "Microsoft's Artificial Intelligence Innovations",
            description: "Understanding Microsoft's advancements in artificial intelligence and their applications in various industries.",
            time: "2024-09-08",
        },
        {
            user_id: 2,
            title: "Facebook's Content Moderation Challenges",
            description: "Analyzing the challenges faced by Facebook in moderating content and combating misinformation on its platform.",
            time: "2024-02-10",
        },
        {
            user_id: 4,
            title: "SpaceX's Reusable Rocket Technology",
            description: "Exploring the development and benefits of SpaceX's reusable rocket technology for reducing the cost of space travel.",
            time: "2024-11-03",
        },
    ];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;