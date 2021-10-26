const sequelize = require("../config/connection");
const seedBlog = require("./blogData");

const inputData = async () => {
  await sequelize.sync({ force: true });
  await seedBlog();
  process.exit(0);
};

inputData();
