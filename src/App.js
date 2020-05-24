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
  }

  this.componentDidMount = this.componentDidMount.bind(this)
}

  componentDidMount(){
  axios.get('/api/books')
        .then((res) => {
          this.setState({books: res.data[0]})  
        })
        .catch(res => {
          console.log('error')
        })
      
  }

  render(){
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