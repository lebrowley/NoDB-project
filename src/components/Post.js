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

    }

    hideEdit(){
        this.setState({editing: false})
    }

    toggleMasterMenu(){

    }

    hideMasterMenu(){

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

            </div>
        )
    }
}

export default Post;