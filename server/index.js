const express = require('express');
const app = express ();
const SERVER_PORT = 4000;

app.use(express.json());
app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));

const randomCtrl = require ('./controllers/randomBook');
const sortCtrl = require('./controllers/sortBooks');

//Generate a random book  GET
app.get('/api/random-book', randomCtrl.getRandomBook)

//Delete a book   DELETE
app.delete('/api/books', sortCtrl.deleteBook)

//Create a book    POST
app.post('/api/books', sortCtrl.createBook)

//Update a cover image   PUT
app.put('/api/books', sortCtrl.updateBookImage)