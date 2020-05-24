const data = require('../books.json');

const book = []
let id = 0
let currentBook = 0

module.exports = {
    getNewBook: (req, res) => {
        const newBook = []
        const newBookMap = data.map( (book, index) => {

            if(id === index){
                return newBook.push(book)
            }
        })
        id++
        res.status(200).send(newBook)
    }
}