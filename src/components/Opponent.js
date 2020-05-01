import React from 'react';

const Opponent = () => {
    return (
        <div className="opponent">
            <div className="stats">
                <div className="top">
                    <div className="pokeballs">
                        <div className="pokeball"></div>
                    </div>
                    <div id="apHP" className="hp-count">100</div>
                </div>
                <span className="name">
                    <h2>Charizard</h2>
                </span>
            </div>
            <img className="pokemon" src="http://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif" alt="A sprite of charizard" />
        </div>
    );
};

export default Opponent;