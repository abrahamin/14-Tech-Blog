const { Blog } = require("../models");

const blogData = [
  {
    name: "Post 1",
  },
  {
    name: "Post 2",
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
