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
        this.setState({text: text})
    } 

    createPost() {
        const {text} = this.state    
        const {createPostFn} = this.props

        createPostFn(text)
        this.setState({text: ''})
    } //in this function, the input from the user is being pulled off of state (having been set by the onChange/updateText from the input); it is passing the state value to the createPostFn which goes back up the line to the parent that is holding this function (Comment.js) by means of the event (that's the only way info can go from child to parent)
    //the value of this.state.text is then reset to an empty string, ready for the next input

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