import React from 'react';
import Opponent from './Opponent'
import Player from './Player'

const PokeBattle = (props) => {
    let blastHp = props.blastHp;
    let playerHp = props.playerHp;
    // Maybe have a hit rate function that you can call inside of each individual action function

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
                    <button>Water Cannon</button>
                    <button>Water Pulse</button>
                    <button>Surf</button>
                    <button>Tackle</button>
                </div>
                <div className="continue">
                    <button onclick="compPokemon()">Continue</button>
                </div>
            </div>
        </div>
    );
}
export default PokeBattle;