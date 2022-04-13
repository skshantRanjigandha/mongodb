const authorModel = require('../models/authorModel')
const BookModel = require('../models/BookModel.js')


const createNewAuthor = async function (req, res) {

    const reqAuthor = req.body
    const SavedData = await authorModel.create(reqAuthor)

    res.send( { msg: SavedData} )
}


const createNewBook = async function (req, res) {

    let saved = await authorModel.create(reqBook)

    res.send( { msg: booksName} )
}



const allBooks = async function (req, res) {

    const authorDetails = await authorModel.create(reqBook)

    res.send( { msg: saved} )
}


const updatedBookPrice = async function (req, res) {






    const bkName =bookdetails[0].name




}


module.exports.createBook = createBook

module.exports.getBooksData = getBooksData


