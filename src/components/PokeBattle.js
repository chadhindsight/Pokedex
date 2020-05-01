import React, { Component } from 'react';

class PokeBattle extends Component {
    render() {
        return (
            <div>
                <div class="game">
                    <div class="opponent">
                        <div class="stats">
                            <div class="top">
                                <div class="pokeballs">
                                    <div class="pokeball"></div>
                                    <div class="pokeball"></div>
                                    <div class="pokeball"></div>
                                    <div class="pokeball"></div>
                                    <div class="pokeball"></div>
                                </div>
                                <div id="apHP" class="hp-count">100</div>
                            </div>
                            <span class="name">
                                Charizard
                            </span>
                            <span class="level">
                                86
                            </span>
                        </div>
                        <img class="pokemon" src="http://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif" alt="A sprite of charizard" />
                    </div>
                    <div class="player">
                        <div class="stats">
                            <div class="top">
                                <div class="pokeballs">
                                    <div class="pokeball"></div>
                                    <div class="pokeball"></div>
                                    <div class="pokeball"></div>
                                    <div class="pokeball"></div>
                                    <div class="pokeball"></div>
                                </div>
                                <div id="myHP" class="hp-count">100</div>
                            </div>
                            <span class="name">
                                Blastoise
    </span>
                            <span class="level">
                                86
    </span>
                        </div>
                        <img class="pokemon" src="http://bit.ly/blastoisegif" alt="A gif from blastoises back sprite" />
                    </div>
                </div>
                <div class="box">
                    <div id="message" class="message">
                        What should Blastoise do?
</div>
                    <div class="actions">
                        <button onclick="waterCannon()">Water Cannon</button>
                        <button onclick="waterPulse()">Water Pulse</button>
                        <button onclick="surf()">Surf</button>
                        <button onclick="tackle()">Tackle</button>
                    </div>
                    <div class="continue">
                        <button onclick="compPokemon()">Continue</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PokeBattle;