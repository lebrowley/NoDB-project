import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Read from './components/Read';
import ToRead from './components/ToRead';

class App extends Component {
  constructor(){
    super();

    this.state= {
      books: [],
      booksRead: [],
      booksToRead: []
  }

  this.componentDidMount = this.componentDidMount.bind(this)
  this.deleteBook = this.deleteBook(this)
  this.addRead = this.addRead(this)
  this.addToRead = this.addToRead(this)
}

  componentDidMount(){
  //axios.get
  }

  deleteBook(){
  //axios.delete
  }

  addRead(){
  //setState ({booksRead: books (the one currently displaying)})
  }

  addToRead(){
  //setState ({booksToRead: books (the one currently displaying)})
  }

  render(){
    return (<div className="App">
     <Header/>

      <div className="book-display">
        {/*display the title, author, image; title/author stacked; inline-block with image*/}
      </div>

      <div className="buttons">
      <h4>Add</h4>
       <div className="add-buttons">
          <button>Read</button> {/*onClick= this.state.addRead */}
          <button>To Read</button> {/*onClick= this.state.addToRead */}
        </div>
      <div className="new-remove-buttons">
        <button>New</button> {/*onClick= this.state.componentDidMount */}
        <button>Remove</button> {/*onClick= this.state.deleteBook */}
      </div>
      </div>

      <Read/>
      <ToRead/>

    </div>
   )
  }
}

export default App;