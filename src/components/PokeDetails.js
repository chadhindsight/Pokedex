import React, { Component } from 'react';
import axios from 'axios';

class PokeDetails extends Component {
    state = {
        pokemonName: '',
        type: '',
        moves: [],
        weight: 0,
        appearances: 0,
        img: ''

    }

    getDetails = async () => {
        // Get the key word from your URL endpoint and check if it matches a value from the pokemon array
        let pokemonId = this.props.match.params.id
        let specificPokemon = this.props.pokemon.find(pokemon => {
            return pokemon.name === pokemonId
        })
        // Use that same url to make a request and use data from the response
        let response = await axios.get(`${specificPokemon.url}`)
        console.log(response, pokemonId)
        let moves = response.data.moves.slice(0, 3).map(item => item.move.name)
        // Set Name, Type, Moves, Weight, Game appearances(game_indices) & Photo
        this.setState({
            pokemonName: response.data.name,
            type: response.data.types[0].type.name,
            moves: moves,
            weight: response.data.weight,
            appearances: response.data.game_indices.length,
            img: response.data.sprites.front_default
        })
        // console.log(this.state.img)
    }
    

    displayDetails = () => {
        return (
            <div id='pokemon-box'>
                <img src={this.state.img} alt="what the pokemon looks like" height="300" />
                <h1>{this.state.pokemonName}</h1>
                <h4> Type: {this.state.type}</h4>
                {/* <ul>
                    <h4>Move List: {this.state.moves}</h4>
                </ul> */}
                <h4> Weight: {this.state.weight} lbs.</h4>
                <h4>Game appearances: {this.state.appearances}</h4>
            </div>
        )
    }
    // Call it in componentDidMount()
    componentDidMount() {
        this.getDetails()
        console.log('Pokedetails Mount')
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id) 
            this.getDetails();
    }

    render() {
        return (
            <div>
                {this.displayDetails()}
            </div>
        );
    }
}

export default PokeDetails;
