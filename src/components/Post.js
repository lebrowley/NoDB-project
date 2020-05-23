import React, { Component } from 'react';
import Edit from './Edit';

class Post extends Component {
    constructor(){
        super();

        this.state = {
            editing: false,
        }

        this.hideEdit = this.hideEdit.bind(this)
        this.showEdit = this.showEdit.bind(this)
        
    }

    showEdit(){
        this.setState({editing: true})
    }

    hideEdit(){
        this.setState({editing: false})
    }

    render(){
        const {text, id, updatePostFn, deletePostFn} = this.props
        return (
            <div className="display-comment">
                <div className="content">
                    {this.state.editing ? 
                        <Edit text= {text}
                              id= {id}
                              hideEdit= {this.hideEdit}
                              updatePostFn= {updatePostFn}  />
                        :
                        <span className="post-text">{text}</span>
                    }
                </div>
                
                <div className="edit-option-buttons">
                    <button className="edit-view-toggle" onClick= {this.showEdit}>Edit</button>
                    <button className="delete-button" onClick= {() => deletePostFn(id)}>Delete</button>
                </div>

            </div>
        )
    }
}

export default Post;