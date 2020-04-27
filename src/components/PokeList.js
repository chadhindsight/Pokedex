import React from 'react';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap';

const PokeList = ({ listOfPokemon }) => {

    let pokemon = listOfPokemon.map((monster) => {
        return (
            <Col sm={6} md={4} key={monster.name}>
                <ListGroupItem className='PokeList-item'>{monster.name}</ListGroupItem>
            </Col>
        )
    });

    return (
        <ListGroup>
            {pokemon}
        </ListGroup>
    )
}

export default PokeList;