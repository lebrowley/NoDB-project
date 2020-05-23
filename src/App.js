import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Comment from './components/Comment';

class App extends Component {
  constructor(){
    super();

    this.state= {
      books: [],
  
      posts: []
  }

  this.componentDidMount = this.componentDidMount.bind(this)
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

        <div className="new-remove-buttons">
            <button onClick={this.componentDidMount}>New</button> 
            
         </div>
      </div>

      <Comment />
      

    </div>
   )
  }
}

export default App;