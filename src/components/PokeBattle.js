import React from 'react';
import Opponent from './Opponent'
import Player from './Player'

const PokeBattle = (props) => {
    console.log(props)
    return (
        <div>
            <div className="game">
                <Opponent />
               <Player />
            </div>
            <div className="box">
                <div id="message" className="message">
                    What should Blastoise do?
            </div>
                <div className="actions">
                    <button onClick={}>Water Cannon</button>
                    <button onClick={}>Water Pulse</button>
                    <button onClick={}>Surf</button>
                    <button onClick={}>Tackle</button>
                </div>
                <div className="continue">
                    <button onclick="compPokemon()">Continue</button>
                </div>
            </div>
        </div>
    );
}
export default PokeBattle;