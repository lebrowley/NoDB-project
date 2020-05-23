import React, { Component } from 'react';
import axios from 'axios'; 
import Compose from './Compose';
// import Post from './Post';

class Comment extends Component {
    constructor(){
        super();

        this.state = {
            posts: []
        }

        this.updatePost = this.updatePost.bind(this)
        this.deletePost = this.deletePost.bind(this)
        this.createPost = this.createPost.bind(this)
    }

    updatePost(id, text){
        axios.put(`/api/books?id=${id}`, {text}
        .then(res => {
            this.setState({posts: res.data})
        }))
        .catch(res => {
            console.log("error")
        })
    }

    deletePost(id){
        axios.delete(`/api/books?id=${id}`)
        .then(res => {
            this.setState({posts: res.data})
        })
        .catch(res => {
            console.log('error')
        })
    }

    createPost(text){
        axios.post('/api/books', {text})
        .then (res =>{
            this.setState({posts: res.data})
        })
        .catch(res => {
            console.log('error')
        })
    }

    render(){
        return (
            <div>
                <h3>Add a Comment</h3>

                <div className="post-body">
                    <Compose createPostFn = {this.createPost} />

                    {/* {posts.map(post => (
                        <Post 
                            key= {post.id}
                            text= {post.text}
                            id= {post.id}
                            updatePostFn= {this.updatePost}
                            deletePostFn= {this.deletePost}
                    />))} */}
                </div>

            </div>
        )
    }
}

export default Comment; 



