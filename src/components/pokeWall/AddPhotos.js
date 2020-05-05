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
    
    handleSubmit(e) {
        // //disable default page reload
        e.preventDefault();
        
        // This is the actual working url
        axios.post('https://ironrest.herokuapp.com/pokephotos', this.state).then(res=>{
            this.props.history.push('/pokewall')
            //Add the new photo in DB to pokewall list of pics
            this.props.addPhoto(res.data.ops[0])
            console.log(res.data.ops)
                
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