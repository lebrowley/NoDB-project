const data = require('../books.json');

let id = 0

module.exports = {
    getNewBook: (req, res) => {
        const newBook = []
        const newBookMap = data.map( (book, index) => {

            if(id === index){
                return newBook.push(book)
            } else if(id >= 15){
                return newBook.push(data[15])

            }
        })
        id++
        res.status(200).send(newBook)
    }  
}

//is there a better way of handling the end of data-- in the real world with an api, would there just be so much data that you wouldn't have to worry about what to do if your data ran out?? or are there ways (better than what I did above) to make it so you can smoothly tell your users there isn't any more data to display??