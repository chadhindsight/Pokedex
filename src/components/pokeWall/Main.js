import React, { Component } from 'react';
import PokeWall from './PokeWall';
import AddPhotos from './AddPhotos'
import './PokeWall.css';
import { Link, Route, Switch } from 'react-router-dom';

class Main extends Component {

    removePhoto = (postRemoved) => {
        console.log(postRemoved.description)

        this.setState({
            posts: this.state.posts.filter(p => p !== postRemoved)
        })
    }
    // Add the post the user submitted to posts array
    addPhoto = (postSubmitted) => {
        this.setState({
            posts: this.state.posts.concat([postSubmitted])
        })
    }

    render() {
        return (
            <div>
                <Link className="addIcon" to="/addphotos"></Link>
                {/* <Switch>
                    <Route path="/pokewall" render={props => <PokeWall posts={this.props.posts} removePhoto={this.props.removePhoto}/>} />
                    <Route exact path="/addphotos" render={props => <AddPhotos {...props} posts={this.props.post} addPhoto={this.props.addPhoto}/>} />
                </Switch> */}
            </div>
        );
    }
}

export default Main;