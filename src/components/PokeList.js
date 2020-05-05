import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import PokeDetails from './PokeDetails';

const PokeList = ({ listOfPokemon }) => {

    let pokemon = listOfPokemon.map((monster) => {
        // console.log(monster.name)
        return (
            <Link to={`/pokemon/${monster.name}`}
                key={monster.name}><MDBListGroupItem className='PokeList-item'>{monster.name}</MDBListGroupItem>
            </Link>
        )
    });

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol size="5">
                    <MDBListGroup>
                        {pokemon}
                    </MDBListGroup>
                </MDBCol>
                <Switch>
                    <MDBCol size="7">
                        <Route exact path='/pokemon/:id' render={props => <PokeDetails {...props} pokemon={listOfPokemon} />} />
                    </MDBCol>
                </Switch>
            </MDBRow>
        </MDBContainer>
    )
}

export default PokeList;