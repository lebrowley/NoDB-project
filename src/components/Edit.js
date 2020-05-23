import React, { Component } from 'react';

class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        }
        this.updatePost = this.updatePost.bind(this)
    }

    updateText(value){
        this.setState({text: value})
    }

    updatePost(){
        const {text} = this.state
        const {id, updatePostFn, hideEdit} = this.props
        
        updatePostFn(id, text)
        hideEdit()
    }

    render(){
        const {hideEdit} = this.props
        const {text} = this.state

        return(
            <div className="edit-comment">
                <textarea className="edit-textarea" value= {text} onChange={ (e) => this.updateText}></textarea>

                <div className="edit-controls">
                    <button id="update-button" onClick= {this.updatePost}>Update</button>

                    <button id="cancel-button" onClick= {hideEdit}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default Edit; 