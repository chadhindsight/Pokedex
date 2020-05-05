import React, { Component } from 'react';
import axios from 'axios';
class AddPhoto extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(event) {
        // //disable default page reload
        event.preventDefault();
        
        // This is the actual working url
        axios.post('https://ironrest.herokuapp.com/pokephotos', this.state).then(res=>{
            this.props.history.push('/pokewall')
                console.log(this)
        })

        // imageLink && description ? 
    }

    render() {
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" onChange={this.handleChange}/>
                        <input type="text" placeholder="Description" name="description" onChange={this.handleChange}/>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto;