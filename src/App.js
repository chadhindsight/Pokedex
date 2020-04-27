import React, { Component } from 'react';
import axios from 'axios';
import PokeList from './components/PokeList';
import { Col } from 'react-bootstrap'

class App extends Component {
  state = {
    pokemon: []
  }

  // Doing func this way sets the 'this' context so you dont need to use bind
  loadPokemon = async (url) => {

    try {
      let res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        console.log(res)
        this.setState({
          pokemon: [...res.data.results]
        })
      }
      //Error Handling if request fails
      catch (err) {
        console.log(`The error is ${err}`);
      }
    
  }

  componentDidMount() {
    this.loadPokemon()
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
        <Col sm={8} md={10} smoffset={2} mdoffset={1}>
          <PokeList listOfPokemon={this.state.pokemon} />
        </Col>
    );
  }
}

// sm = { 8} md = { 10} smOffset = { 2} mdOffset = { 1}

export default App;