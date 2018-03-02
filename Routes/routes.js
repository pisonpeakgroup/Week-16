const books = require('./../controllers/schooldata');

const routes = function(router) {
    router.route('/schooldata')
        .post(books.create)
        .get(books.getAll);

    router.route('/schooldata/:bookId')
        .put(books.update)
        .get(books.getOne)
        .delete(books.delete);
};

module.exports = routes;
