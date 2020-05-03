import React, { Component } from 'react';
import Opponent from './Opponent'
import Player from './Player'
import ReactAudioPlayer from 'react-audio-player';
import { useSpring, animated } from 'react-spring';
class PokeBattle extends Component {
    state = {
        blastHP: 105,
        charHP: 100,
        playerTurn: true,
        dynamicMessage: 'What should Blastoise do?'
    }

    // Function that calculate if move misses 
    missRate = (message) => {
        let miss = Math.ceil((Math.random() * 10))
        console.log(miss)
        return miss === 1 || miss === 5 ? true : false
    }
    // OPPONENT"S TURN
    opponentAttack = () => {
        let rate = this.missRate()

        if (rate === true) {
            this.setState({
                playerTurn: true,
                dynamicMessage: 'The attack from Charizard missed!',
                charHP: this.state.charHP
            })
        }
        else {
            const flamethrower = 25;
            const dragonClaw = 18;
            const scratch = 13
            // Determine which attack enemy will use
            let amount = Math.ceil((Math.random() * 3))
            if (amount === 1) {
                this.setState({
                    blastHP: this.state.blastHP - flamethrower,
                    dynamicMessage: `Charizard used flamethrower!`
                })
                setTimeout(() => {
                    this.setState({ dynamicMessage: 'What should Blastoise do?'})
                }, 2000);
            }

            else if (amount === 2) {
                this.setState({
                    playerTurn: true,
                    blastHP: this.state.blastHP - dragonClaw,
                    dynamicMessage: 'Charizard used dragonClaw!'
                })
                setTimeout(() => {
                    this.setState({ dynamicMessage: 'What should Blastoise do?' })
                }, 2000);
            }
            else {
                this.setState({
                    playerTurn: true,
                    blastHP: this.state.blastHP - scratch,
                    dynamicMessage: 'Charizard scratched yo ass!'
                })
                setTimeout(() => {
                    this.setState({ dynamicMessage: 'What should Blastoise do?' })
                }, 2000);
            }
        }
    }
    // Function that calculates damage during players turn
    attack = (e) => {
    
        let rate = this.missRate()
        // This prevents react from setting the event to a null value... I think
        e.persist()
        if (this.state.playerTurn === true) {
            let damage
            if (rate === true) {
                this.setState({
                    dynamicMessage: 'Your attacked missed!',
                    playerTurn: false,
                    charHP: this.state.charHP
                })
                console.log(this.state.charHP)
            }

            else {
                if (this.state.charHP > 0) {
                    if (e.target.innerText === 'Water Cannon') damage = 20
                    else if (e.target.innerText === 'Water Pulse') damage = 38
                    else if (e.target.innerText === 'Surf') damage = 25
                    else if (e.target.innerText === 'Tackle') damage = 12
                }
                else {
                    this.state.blastHP <= 0 ? alert('Battle has concluded. You lost') : alert('Battle has concluded. You Won!')
                }
                //      else {
                //     alert('Game Over! Play again?')
                //  }
            }
            //    switch (e) {
            //        case e.target.innerText === 'Water Cannon':
            //            damage = 25
            //            break;
            //        case e.target.innerText === 'Water Pulse':
            //            damage = 33
            //            break;
            //        case e.target.innerText === 'Surf':
            //            damage = 45
            //            break;
            //        case e.target.innerText === 'Tackle':
            //            damage = 12
            //            break;
            //         default:
            //         damage = 0    
            //             break   
            //    }
            //    After Button is clicked disable all buttons and then enable them again
            e.target.setAttribute("disabled", "true")
            setTimeout(() => {
                e.target.removeAttribute("disabled")
                this.opponentAttack()
            }, 3000);
            this.setState({
                charHP: this.state.charHP - damage,
                dynamicMessage: `Blastoise's attack was successful!`
            })
        }
    }


    render() {
        return (
            <div>
                <div className="game" ref={this.buttonRef}>
                    <Opponent hp={this.state.charHP} />
                    <Player hp={this.state.blastHP} />
                </div>
                <div className="box">
                    <div id="message" className="message">
                        {this.state.dynamicMessage}
                    </div>
                    <div className="actions">
                        <button className="a-btn" onClick={this.attack}>Water Cannon</button>
                        <button className="a-btn" onClick={this.attack}>Water Pulse</button>
                        <button className="a-btn" onClick={this.attack}>Surf</button>
                        <button className="a-btn" onClick={this.attack}>Tackle</button>
                    </div>
                    <div className="continue">
                        {/* On click button to continue */}
                    </div>
                </div>
                <ReactAudioPlayer
                    src="../battle.mp3"
                    autoPlay
                    controls
                />
            </div >
        );
    }

}
export default PokeBattle;