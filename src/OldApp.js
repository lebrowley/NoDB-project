import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Read from './components/old/Read';
import ToRead from './components/old/ToRead';

class App extends Component {
  constructor(){
    super();

    this.state= {
      books: [],
      booksRead: [],
      booksToRead: [],
      posts: []
  }

  this.componentDidMount = this.componentDidMount.bind(this)
  this.deleteBook = this.deleteBook(this)
  this.addRead = this.addRead(this)
  this.addToRead = this.addToRead(this)
  this.createPost = this.createPost(this)
}

  componentDidMount(){
  axios.get('/api/new-book')
        .then((res) => {
          this.setState({books: res.data[0]})  //can i make it so i don't have to specify index?? 
        })
        .catch(res => {
          console.log('error')
        })
      
  }

  deleteBook(){
  //axios.delete
  }

  addRead(){
  //setState ({booksRead: books (the one currently displaying)})
    let arrayUpdate = []
    this.state.booksRead.push(this.state.books[0])
    return this.setState({booksRead: arrayUpdate})
  }

  addToRead(){
  //setState ({booksToRead: books (the one currently displaying)})
  }


 createPost(text){
    axios.post('/api/books', {text}).then (res => this.setState({posts: res.data}))
  }

  render(){
    console.log(this.state.books)
    return (
    <div className="App">

       <Header/>

      <div className="book-display"> 
    
        <div className="title-author">
          <p style={{textDecoration: "italic"}}>{this.state.books.title}</p>
          <p>{this.state.books.author}</p>
        </div>

        <div className="image">
          <img id="image-thumbnail"
            src={this.state.books.image} 
          />
        </div>
      </div>

      <div className="buttons">
         <div className="new-remove-buttons">
            <button onClick={this.componentDidMount}>New</button> 
            <button>Remove</button> {/*onClick= this.state.deleteBook */}
         </div>
          
          <h3>SORT</h3>
          <div className="add-buttons">
            <button onClick={this.state.addRead}>Read</button>
            <button>To Read</button> {/*onClick= this.state.addToRead */}
          </div>
          
      </div>

      <div className="read-toread-components">
        <Read sortRead={this.state.addRead} createPostFn={this.createPost}/>
        <ToRead/>
      </div>
      

    </div>
   )
  }
}

export default App;