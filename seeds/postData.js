const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Test",
    "postContent": "This is a test",
    "userId": 1
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;