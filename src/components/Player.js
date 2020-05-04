import React from 'react';

const Player = (props) => {
    return (
        <div className="player">
            <div className="stats">
                <div className="top">
                    <div className="pokeballs">
                        <div className="pokeball"></div>
                    </div>
                    <div id="myHP" className="hp-count">{props.hp}</div>
                </div>
                <span className="name">
                    <h2>Blastoise</h2>
                </span>
            </div>
            <img className={props.isHit? 'pokemon hit': 'pokemon'} src="http://bit.ly/blastoisegif" alt="A gif from blastoises back sprite" />
        </div>
    );
};

export default Player;