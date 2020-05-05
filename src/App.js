import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import logo from './logo.svg';
import Home from './components/Home';
import PokeList from './components/PokeList';
import PokeWall from './components/pokeWall/PokeWall'
import AddPhotos from './components/pokeWall/AddPhotos';
import PokeBattle from './components/PokeBattle';
import Socials from './components/Socials';
import Pagination from 'react-bootstrap/Pagination';
import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  state = {
    pokemon: [],
    activePage: 1,
    limit: 40,
    // Every time we change page, we need to update the offset. Might remove this later
    offset: 0,
    totalPages: 0,
    posts: []

  }

  // Making a func this way sets the 'this' context so you dont need to use a bind method
  loadPokemon = async (url) => {
    try {
      let res = await axios.get(url)

      let pages = Math.round(res.data.count / this.state.limit)
      this.setState({
        pokemon: [...res.data.results],
        totalPages: pages,
        count: res.count
      })
      console.log(this.state.totalPages)
      // console.log(this.state.pokemon)
    }
    //If the request fails it gets handled here
    catch (err) {
      console.log(`A ${err} was returned. Something is off :(`);
    }

  }
  getPhotos = async () => {
    try {
      let photos = await axios.get(`https://ironrest.herokuapp.com/pokephotos`);
      this.setState({
        posts: photos.data
      })
      console.log(photos.data)
    }

    catch (err) {
      console.log('Damn!')
    }
  }
  // Load the initial set of pokemon once the component renders
  componentDidMount() {
    this.loadPokemon(this.props.baseURL);
    this.getPhotos()
  }





  removePhoto = async (postRemoved) => {
    console.log(postRemoved._id)
    // Delete from app and database. Maybe refactor
    let photo = await axios.delete(`https://ironrest.herokuapp.com/pokephotos/${postRemoved._id}`)
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
    if (this.state.pokemon.length === 0) { return '...loading' }

    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Pokemon Hub</h1>
          <div id="nav">
            <Link to="/">Home</Link>
            <Link to="/pokemon">Pokedex</Link>
            <Link to="pokewall">PokeWall</Link>
            <Link to="/battle">PokeBattle</Link>
          </div>
          <Socials />
        </div>


        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />}></Route>
          <Route path="/pokemon/" render={props => (<PokeList {...props} listOfPokemon={this.state.pokemon} />)} />
          {/* Battle component takes the parts of state thatit needs instead of the whole thing */}
          <Route exact path="/battle" render={props => <PokeBattle {...props} blastHP={this.state.blastHP} charHP={this.state.charHP} />} />
          <Route path="/pokewall" render={props => <PokeWall {...props} posts={this.state.posts} removePhoto={this.removePhoto} />} />
          <Route exact path="/addphotos" render={props => <AddPhotos {...props} posts={this.state.posts} addPhoto={this.addPhoto} />} />
        </Switch>
      </div>
    );
  }
}

export default App;