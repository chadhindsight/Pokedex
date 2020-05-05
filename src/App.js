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
import { Route, Switch } from 'react-router-dom';

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
    
    catch(err) {
      console.log('Damn!')
    }
  }
  // Load the initial set of pokemon once the component renders
  componentDidMount() {
    this.loadPokemon(this.props.baseURL);
    this.getPhotos()
  }


  //This method fires when a user clicks a different page and returns result of a new call to the related endpoint
  handlePaginationSelect = (page) => {
    // Fix offset later
    let offset = this.state.limit * Number(page.target.innerText)
    this.loadPokemon(`${this.props.baseURL}?limit=${this.state.limit}&offset=${offset}`);
  }

  // PAGINATION LOGIC BASED ON VALUE OF TOTAL PAGES IN STATE OBJECT
  pagination = () => {
    let items = [];
    // Once a certain number is passed, return the Ellipsis variant before continuing with numbers again
    for (let number = 1; number <= this.state.totalPages; number++) {
      items.push(
        <Pagination.Item key={number} className="buns">
          {number}
        </Pagination.Item>
      );
    }

    return (
      <div>
        <Pagination onClick={this.handlePaginationSelect}>{items}
          <Pagination.Ellipsis />
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    )
  };
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
          <h2>Pokemon Hub</h2>
        </div>


        <Switch>

          <Route path="/pokemon/" render={props => (<PokeList {...props} listOfPokemon={this.state.pokemon} />)} />
          {/* Battle component takes the parts of state thatit needs instead of the whole thing */}
          <Route exact path="/battle" render={props => <PokeBattle {...props} blastHP={this.state.blastHP} charHP={this.state.charHP} />} />
          <Route path="/pokewall" render={props => <PokeWall {...props} posts={this.state.posts} removePhoto={this.removePhoto} />} />
          <Route exact path="/addphotos" render={props => <AddPhotos {...props} posts={this.state.posts} addPhoto={this.addPhoto} />} />
        </Switch>
        <Socials />
      </div>
    );
  }
}

export default App;