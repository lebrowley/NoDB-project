const data = require('../books.json'); ///now you can manipulate this in your methods just like a regular array

const book = []
let id = 0

module.exports = {
    getNewBook: (req, res) => {
        const newBook = []
        const newBookMap = data.map( (book, index) => {
            if(id === index){
               return newBook.push(book)  }  
            // } else if(index === data.length){
            //     return res.send('No more books!')
            // }
            //the problem is that in the display, it get's to the properties "title" "author" etc. and can't display them because they have no definition
        })
        id++
        res.status(200).send(newBook)
    },

    // createBook: (req, res) => {
    //     const {title, author, image} = req.body
    //     const newBook = {id, title, author, image}

    //     book.push(newBook)
    //     id++
    //     res.status(200).send(book)
    // }

    createPost: (req, res) => {
        const newPost = req.body.text

        res.status(200).send(newPost)
    }
}