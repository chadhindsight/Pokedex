import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PokeDetails from './components/PokeDetails';
import PokeList from './components/PokeList';
import { Col } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination'
import { Route, Switch, Link } from 'react-router-dom';
import { FacebookShareButton, FacebookIcon, FacebookShareCount, TwitterIcon, InstapaperShareButton, LinkedIn} from 'react-share';

class App extends Component {
  state = {
    pokemon: [],
    activePage: 1,
    limit: 40,
    // Every time we change page, we need to update the offset. Might remove this later
    offset: 0,
    totalPages: 0
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
    //Error Handling if the request fails
    catch (err) {
      console.log(`A ${err} was returned. Something is off :(`);
    }

  }
  // Load the initial set of pokemon once component renders
  componentDidMount() {
    this.loadPokemon(this.props.baseURL)
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

  render() {
    if (this.state.pokemon.length === 0) { return '...loading' }

    return (
      <div>
        {/* The url passed in will be the url you want to share on social media */}
        <FacebookShareButton url={window.location.href} size={32}>
          <FacebookIcon />
        </FacebookShareButton>
        <Switch>
          {["/", "/pokemon"].map(path => (
            <Route
              key={path}
              path={path}
              render={(props) => (
                <div>
                  <PokeList {...props} listOfPokemon={this.state.pokemon} />
                </div>
              )}
            />
          ))}       
        </Switch>
      </div>
    );
  }
}
export default App;