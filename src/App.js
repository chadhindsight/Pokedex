import React, { Component } from 'react';
import axios from 'axios';
import PokeList from './components/PokeList';
import { Col, Pagination } from 'react-bootstrap'

class App extends Component {
  state = {
    pokemon: [],
    activePage: 0,
    limit: 40,
    // Every time we change page, we need to update the offset
    offset: 0,
    totalPages: 0
  }

  // Doing func this way sets the 'this' context so you dont need to use bind
  loadPokemon = async (url) => {

    try {
      let res = await axios.get(url)
        console.log(res)
        
        let pages = Math.round(res.count / this.state.limit)
        this.setState({
          pokemon: [...res.data.results],
          totalPages: pages,
          count: res.coun
        })
      }
      //Error Handling if request fails
      catch (err) {
        console.log(`The error is ${err}`);
      }
    
  }
  // Load pokemon once component renders
  componentDidMount() {
    this.loadPokemon(this.props.baseURL) 
  }
  // componentDidMount = () => {
  //   axios.get(`https:pokeapi.co/api/v2/pokemon`)
  //   .then(response => {
  //     console.log(response)
  //   })
  //       .catch(err => console.log(err))
  // }

  render() {
    console.log(this.state.pokemon)
        if (this.state.pokemon.length === 0) { return '...loading' }
    
        return (
       <div>   
        <Col sm={8} md={12} smoffset={2} mdoffset={1}>
          <PokeList listOfPokemon={this.state.pokemon} />
        </Col>

            <Col sm={12}>
              <Pagination
              />
            </Col>
      </div>  
    );
  }
}

// sm = { 8} md = { 10} smOffset = { 2} mdOffset = { 1}

export default App;