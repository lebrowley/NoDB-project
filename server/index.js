const express = require('express');
const app = express ();
const SERVER_PORT = 4000;

app.use(express.json());
app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`));

const newCtrl = require('./controllers/newBook')
const commentCtrl = require('./controllers/comments')

//Generate a new book to display
app.get('/api/books', newCtrl.getNewBook)

//Generate, edit and delete comments
app.post('/api/comments', commentCtrl.newComment)

app.put('/api/comments/:id', commentCtrl.editComment)

app.delete('/api/comments/:id', commentCtrl.deleteComment)

//Get dummy comments for display
app.get('/api/comments', commentCtrl.getComment)