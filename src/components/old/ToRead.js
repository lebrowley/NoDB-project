import React, {Component} from 'react';

class ToRead extends Component {
    constructor(){
        super();

        this.state = {
            toReadUser: []
        }
    }

    addUserBook(){
        //axios.post
    }

    changeImage(){
        // axios.put
    }

    render(){
        return (
            <div className="To-Read">
                <h2>To Read</h2>

                <div className="list">{/*receive props of this.state.ToRead 
                unordered list displaying title author and image in the same way as App.js
                display BOTH props from App.js AND this.state.readUser from user input.....
                */}
                     <p>title</p>
                    <p>author</p>
                    <img alt="image"/>
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
                            placeholder="title"
                        ></input>
                        <input
                            placeholder="author"
                        ></input>
                        <input
                            placeholder="image url"
                        ></input>
                        <button>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToRead;