const express = require('express');
const app = express ();
const SERVER_PORT = 4000;

app.use(express.json());
app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));

const newCtrl = require ('./controllers/newBooks');
const sortCtrl = require('./controllers/sortBooks');
const commentCtrl = require('./controllers/comments')

//Generate a new book  GET
app.get('/api/new-book', newCtrl.getNewBook)

//Generate comments   POST, PUT, DELETE
app.post('/api/books', commentCtrl.newComment)
app.put('/api/books', commentCtrl.editComment)
app.delete('/api/books', commentCtrl.deleteComment)






//Create a book    POST
app.post('/api/books', newCtrl.createPost)

//Delete a book   DELETE
app.delete('/api/books', sortCtrl.deleteBook)

//Update a cover image   PUT
app.put('/api/books', sortCtrl.updateBookImage)