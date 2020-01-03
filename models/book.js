const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const Book = sequelize.define("book", {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  genre: Sequelize.STRING,
  pages: Sequelize.INTEGER
});

Book.sync();

module.exports = Book;
