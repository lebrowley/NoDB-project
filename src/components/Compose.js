import React, { Component } from 'react'; 

class Compose extends Component {
    constructor(){
        super();

        this.state = {
            text: ''
        }
        
        this.createPost = this.createPost.bind(this)
    }

    updateText(text) {
        this.setState({text})
    }

    createPost() {
        const {text} = this.state    
        const {createPostFn} = this.props

        createPostFn(text)
        this.setState({text: ''})
    }

    render() {
        return (
            <div className="compose-body">
                <textarea
                    className="comment-textarea"
                    placeholder="write your comment here"
                    value= {this.state.text}
                    onChange= { (e) => this.updateText(e.target.value) }
                    ></textarea> 
                   

                <button className="comment-button" onClick={this.createPost}>Comment</button>
            </div>
        )
    }
}

export default Compose; 