var axios = require('axios');
var isbnModel = require('../models/isbn');

const book = {
    getIsbn: async function (req, res, next) {
        const isbn = req.query.isbn;
        try {
            const book = await isbnModel.isbn(isbn);
            res.json({ code: 200, data: book.data })
        } catch (e) {
            res.json({code:100, data:e})
            // res.locals.error = e;
            // res.render('error', res.locals)
        }

    }
};

module.exports = book;