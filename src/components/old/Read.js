import React, {Component} from 'react';
import axios from 'axios';

class Read extends Component {
    constructor(){
        super();

        this.state = {
            readUser: [],
            text: ''
        }
        this.createPost = this.createPost.bind(this)
    }

    // addDisplayBook(){
    //     //take props from App.js (the book array and push it to state here?? )
    // }

    // addUserBook(title, author, image){
    //     axios.post('/api/books', {title, author, image})
    //         .then(res => {
    //             this.setState({readUser: res.data})
    //         })
    //         .catch(res => {
    //             console.log('error')
    //         })
    // }

    updateText(text){
        this.setState({text})

    }
    
   createPost(){
       const {text} = this.state
       const {createPostFn} = this.props

       createPostFn(text)
       this.setState({text: ''})
   }

    

    changeImage(){
        // axios.put
    }

    render(){
        // let {title, author, image}= this.props
        return (
            <div className="Read">
                <h2>Read</h2>

                <div className="list">{/*receive props of this.state.Read 
                unordered list displaying title author and image in the same way as App.js
                display BOTH props from App.js AND this.state.readUser from user input.....
                */}
                    {/* <p>{this.props.title}</p>
                    <p>{this.props.author}</p>
                    <img 
                        alt="image"
                        src={this.props.image}
                    /> */}
                </div>

                <div className="changeImage-box">
                    <input
                        placeholder="url here"
                    ></input>
                    <button>Change Image</button>
                </div>

                <div className="input-section">
                    <h5>Add Your Own Book</h5>
                    <div className="input">
                        <input
                            onChange= { (e) => this.updateText(e.target.value) }
                            // value= {text}
                            placeholder="title"
                        />
                        <button onClick={this.createPost}>create post</button>

                        {/* <input
                            onChange= { (e) => this.addUserBook(e.target.value) }
                            // value= { text }
                            placeholder="author"
                        />
                        <input
                            onChange= { (e) => this.addUserBook(e.target.value) }
                            // value={ text }
                            placeholder="image url" */}
                        />
                        <button onClick={this.state.displayState}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Read;