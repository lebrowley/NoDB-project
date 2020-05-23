import React, { Component } from 'react';
import axios from 'axios'; 
import Compose from './Compose';
import Post from './Post';

class Comment extends Component {
    constructor(){
        super();

        this.state = {
            posts: []
        }

        this.updatePost = this.updatePost.bind(this)
        // this.deletePost = this.deletePost.bind(this)
        // this.createPost = this.createPost.bind(this)
    }

    componentDidMount(){
        axios.get('/api/comments')
        .then(res => {
            this.setState({posts: res.data})
        })
        .catch(res =>{
            console.log('error getting comment data')
        })
    }

    updatePost(id, text) {
        axios.put(`/api/comments?id=${id}`, {text})
        .then(res => {
            this.setState({posts: res.data})
        })
        .catch(res => {
            alert('error updating post')
        })
    }

    deletePost(id) {
        axios.delete(`/api/comments?id=${id}`)
        .then (res => {
            this.setState({posts: res.data})
        })
        .catch(res => {
            alert('error deleting post')
        })
    }

    render(){
        return (
            <div>
                <h3>Add a Comment</h3>

                <div className="post-body">
                     {this.state.posts.map(post => (
                        <Post 
                            key= {post.id}
                            text= {post.text}
                            id={post.id}
                            updatePostFn= {this.updatePost}
                            // deletePostFn= {this.deletePost}
                    />))}

                    <Compose 
                            createPostFn = {this.createPost} />

                </div>

            </div>
        )
    }
}

export default Comment; 


