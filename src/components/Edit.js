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
        return(
            <div className="edit-comment">
                <input 
                    className="edit-box" 
                    value= {this.state.text} 
                    onChange={ (e) => this.updateText}></input>

                <div className="edit-controls">
                    <button 
                        id="update-button" 
                        onClick= {this.updatePost}>
                            Update</button>

                    <button 
                        id="cancel-button" 
                        onClick= {this.props.hideEdit}>
                            Cancel</button>
                </div>
            </div>
        )
    }
}

export default Edit; 