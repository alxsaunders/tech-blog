const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Beautiful Day",
    "postContent": "This is a beautiful day",
    "userId": 1
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;