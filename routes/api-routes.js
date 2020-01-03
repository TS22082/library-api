const express = require("express");
const Book = require("../models/book");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const router = express.Router();

// Get all books
router.get("/books/all", (req, res) => {
  Book.findAll({}).then(results => {
    res.send(results);
  });
});

// Get specific book (by id)
router.get("/books/find/:id", (req, res) => {
  Book.findAll({
    where: {
      id: req.params.id
    }
  }).then(results => {
    res.send(results);
  });
});

//get short stories
router.get("/all/short", (req, res) => {
  Book.findAll({
    where: {
      pages: {
        [Op.lte]: 100
      }
    },
    order: [["pages", "ASC"]]
  }).then(results => {
    res.json(results);
  });
});

//get short stories (search operators)
router.get("/all/long", (req, res) => {
  Book.findAll({
    where: {
      pages: {
        [Op.gt]: 100
      }
    },
    order: [["pages", "ASC"]]
  }).then(results => {
    res.json(results);
  });
});

// Post new book
router.post("/books/new", (req, res) => {
  Book.create({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    pages: req.body.pages
  }).then(newPost => {
    res.send(newPost);
  });
});

// delete book by id
router.delete("/delete/:id", (req, res) => {
  Book.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.end();
  });
});

// update a book by id
router.put("/update", (req, res) => {
  Book.update(
    {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      pages: req.body.pages
    },
    {
      where: {
        id: req.body.id
      }
    }
  ).then(() => {
    res.end();
  });
});

module.exports = router;
