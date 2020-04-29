import React, { Component } from 'react';
import axios from 'axios';
class PokeDetails extends Component {
    // Might have to make a new request with the url accessed from the url key in the pokemon object 
    // Call it in componentDidMount()
    //Use this.props.pokemon.find() to target the pokemon you want the information for
    // console.log(this.props.pokemon)
    // Displays the information for the selected pokemon

    displayDetails = async () => {
        // Get the key word from your URL endpoint and check if it matches a value from the pokemon array
        let pokemonId = this.props.match.params.id
        // Get the url that will be used for axios request!
        let specificPokemon = this.props.pokemon.find(pokemon => {
            return pokemon.name === pokemonId
        })
        let response = await axios.get(`${specificPokemon.url}`)
        
    }

    componentDidMount() {
        this.displayDetails()
    }

    render() {
       
        return (
            <div>
                <h2>pokemon stuff!</h2>
            </div>
        );
    }
}

export default PokeDetails;