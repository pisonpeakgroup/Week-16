
const Book = require('./../models/schooldata');

const bookController = {
    create: function(req, res) {
        const body = req.body;

        const book = new Book({
            title: body.title,
            description: body.description,
            yearOfPublication: +body.yearOfPublication,
            isbn: body.isbn,
            author: body.author
        });
        book.save(function(err, _book) {
            if (err) {
                res.status(500).send({ message: 'An error occurred.' });
            } else {
                res.status(201).send({ message: 'Book successfully created.', book: _book });
            }
        });
    },

    getAll: function(req, res) {
        Book.find({}, function(err, books) {
            if (err) {
                res.status(500).send({ message: 'An error occurred when retrieving the data.' });
            } else {
                res.status(200).send(books);
            }
        })
    },

    getOne: function(req, res) {
        const id = req.params.bookId;

        Book.findById(id, function(err, book) {
            if (err) {
                res.status(500).send({ message: 'An error occurred when retrieving the books.' });
            } else if (book) {
                res.status(404).send({ message: 'The book requested does not exist' });
            } else {
                res.status(200).send(book);
            }
        });
    },

    update: function(req, res) {
        const id = req.params.bookId;
        const body = req.body;

        Book.findById(id, function(err, book) {
            if (err) {
                res.status(500).send({ message: 'An error occurred when retrieving the books.' });
            } else if (!book) {
                res.status(404).send({ message: 'The requested book does not exist.' });
            } else {
                ['title', 'yearOfPublication', 'isbn', 'author', 'description'].forEach(function(property) {
                    if (body[property]) {
                        book[property] = body[property];
                    }
                });

                book.save(function (err, _book) {
                    if (err) {
                        res.status(500).send({ message: 'An error occurred when updating the book.' });
                    } else {
                        res.status(200).send(_book);
                    }
                })
            }
        })
    },

    delete: function(req, res) {
        const id = req.params.bookId;

        Book.findByIdAndRemove(id, function(err) {
            if (err) {
                res.status(500).send({ message: 'An error occurred when removing the book.' });
            } else {
                res.status(200).send({ message: 'Book successfully deleted.' });
            }
        })
    }
};

module.exports = bookController;
