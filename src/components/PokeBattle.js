import React, { Component } from 'react';
import Opponent from './Opponent'
import Player from './Player'
import ReactAudioPlayer from 'react-audio-player';

class PokeBattle extends Component {
    state = {
        blastHP: 105,
        charHP: 100,
        playerTurn: true,
        dynamicMessage: 'What should Blastoise do?'
    }
    componentDidUpdate = (prevProps,prevState) => {
        console.log(prevState)
    }

    game =  (e) => {
        console.log(this.state.charHP)
        

        let opponentHP = this.state.charHP
        let playerDamage = 0
        let message = `Blastoise's missed!`

        let missed = this.missRate()

        if (missed === false ) {
            playerDamage = this.playerAttack2(e)
            opponentHP -= playerDamage 
            message = `Blastoise's attack was successful!`
            if(opponentHP < 0) opponentHP = 0
        }

        

        setTimeout(this.opponentAttack2, 2000)

        this.setState({
            charHP: opponentHP,
            dynamicMessage: message,
            playerTurn: false
        })
    }

    opponentAttack2 = () => {
        if(this.state.charHP <= 0) {
            alert("You won!")
        }

        let missed = this.missRate()

        setTimeout(() => {
            if (this.state.blastHP <= 0) {
                alert("You lost!")
            }
        }, 2000);

        if(missed === false ) {
            const flamethrower = 25;
            const dragonClaw = 18;
            const scratch = 13
            // Determine which attack the enemy will use
            let enemyMove = Math.ceil((Math.random() * 3))
            if (enemyMove === 1) {
                this.setState({
                    playerTurn: true,
                    blastHP: this.state.blastHP - flamethrower,
                    dynamicMessage: `Charizard used flamethrower!`
                })
            }
            else if (enemyMove === 2) {
                this.setState({
                    playerTurn: true,
                    blastHP: this.state.blastHP - dragonClaw,
                    dynamicMessage: 'Charizard used dragonClaw!'
                })
            }
            else {
                this.setState({
                    playerTurn: true,
                    blastHP: this.state.blastHP - scratch,
                    dynamicMessage: 'Charizard scratched yo ass!'
                })
            }
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

    // OPPONENT'S TURN
    opponentAttack = () => {

            const flamethrower = 25;
            const dragonClaw = 18;
            const scratch = 13
            // Determine which attack the enemy will use
            let enemyMove = Math.ceil((Math.random() * 3))
            if (enemyMove === 1) {
                this.setState({
                    blastHP: this.state.blastHP - flamethrower,
                    dynamicMessage: `Charizard used flamethrower!`
                })
                setTimeout(() => {
                    this.setState({ dynamicMessage: 'What should Blastoise do?'})
                }, 2000);
            }
            else if (enemyMove === 2) {
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
    
    // No longer directly on the Function that calculates damage during players turn
    playerAttack = (e) => {
        let damage = 0
        let hp = this.state.charHP

        // This prevents react from setting the event to a null value... I think
        //e.persist()
       

                    if (e.target.innerText === 'Water Cannon') damage = 20
                    else if (e.target.innerText === 'Water Pulse') damage = 38
                    else if (e.target.innerText === 'Surf') damage = 25
                    else if (e.target.innerText === 'Tackle') damage = 12
                    hp = Number(this.state.charHP - damage)
                
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
            // setTimeout(() => {
            //     e.target.removeAttribute("disabled")
            // }, 3000);

            console.log(this.state.charHP, typeof this.state.charHP, damage)
            // let hp = Number(this.state.charHP - damage)
            if (hp < 0 ) hp = 0  
            this.setState({
                charHP: hp,
                dynamicMessage: `Blastoise's attack was successful!`,
                playerTurn: false
            })
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
                    <div className="continue">
                        {/* On click button to continue */}
                    </div>
                </div>
                <ReactAudioPlayer
                    src="../battle.mp3"
                    controls
                />
            </div >
        );
    }

}
export default PokeBattle;