import React, { Component } from 'react';
import Opponent from './Opponent'
import Player from './Player'
import ReactAudioPlayer from 'react-audio-player';

class PokeBattle extends Component {
    state = {
        blastHP: 105,
        charHP: 100,
        playerTurn: true,
        dynamicMessage: 'What should Blastoise do?',
        playerHit: false,
        opponentHit: false
    }
    componentDidUpdate = (prevProps, prevState) => {
        console.log(prevState)
    }

    game = (e) => {
        console.log(this.state.charHP)


        let opponentHP = this.state.charHP
        let playerDamage = 0
        let message = `Blastoise's missed!`

        let missed = this.missRate()

        if (missed === false) {
            playerDamage = this.playerAttack2(e);
            opponentHP -= playerDamage;
            message = `Blastoise's attack was successful!`;
            if (opponentHP < 0) opponentHP = 0
        }



        setTimeout(this.opponentAttack2, 2000)

        this.setState({
            charHP: opponentHP,
            dynamicMessage: message,
            opponentHit: missed ? false : true,
            playerTurn: false
        })
    }

    opponentAttack2 = () => {
        if (this.state.charHP <= 0) {
            alert("You won!")
        }

        let missed = this.missRate()
        setTimeout(() => {
            if (this.state.blastHP <= 0) {
                alert("You lost!")
                this.setState({
                    blastHP: 105,
                    charHP: 100,
                    dynamicMessage: 'What should Blastoise do?',
                })
            } else {
                this.setState({
                    playerHit: false,
                    opponentHit: false
                })
            }
        }, 2000);

        if (missed === false) {
            // Determine which attack the enemy will use
            let attacks = ['', 'scratch', 'dragonClaw', 'flamethrower']

            let randomIndex = Math.ceil((Math.random() * 3))
            let myHP = this.state.blastHP - randomIndex * 14
            if (myHP < 0) myHP = 0;
            this.setState({
                playerTurn: true,
                blastHP: myHP,
                playerHit: true,
                dynamicMessage: `Charizard used ${attacks[randomIndex]}`
            })

        }
        else {
            this.setState({
                playerTurn: true,
                dynamicMessage: 'Charizard missed!'
            })
        }
    }

    playerAttack2 = (e) => {
        let damage = 0

        if (e.target.innerText === 'Water Cannon') damage = 20
        else if (e.target.innerText === 'Water Pulse') damage = 38
        else if (e.target.innerText === 'Surf') damage = 25
        else if (e.target.innerText === 'Tackle') damage = 12

        return damage
    }

    //Determine if a move misses 
    missRate = () => {
        let miss = Math.ceil((Math.random() * 10))

        return miss === 1 || miss === 5 ? true : false
    }

    render() {
        return (
            <div>
                <div className="game" ref={this.buttonRef}>
                    <Opponent hp={this.state.charHP} isHit={this.state.opponentHit} />
                    <Player hp={this.state.blastHP}  isHit={this.state.playerHit}/>
                </div>
                <div className="box">
                    <div id="message" className="message">
                        {this.state.dynamicMessage}
                    </div>
                    {this.state.playerTurn === true ?
                        <div className="actions">
                            <button className="a-btn" onClick={this.game}>Water Cannon</button>
                            <button className="a-btn" onClick={this.game}>Water Pulse</button>
                            <button className="a-btn" onClick={this.game}>Surf</button>
                            <button className="a-btn" onClick={this.game}>Tackle</button>
                        </div> :
                        <div className="actions">
                            <button className="a-btn" disabled onClick={this.game}>Water Cannon</button>
                            <button className="a-btn" disabled onClick={this.game}>Water Pulse</button>
                            <button className="a-btn" disabled onClick={this.game}>Surf</button>
                            <button className="a-btn" disabled onClick={this.game}>Tackle</button>
                        </div>
                    }
                </div>
                {/* <ReactAudioPlayer
                    src="../battle.mp3"
                    controls
                /> */}
            </div >
        );
    }

}
export default PokeBattle;