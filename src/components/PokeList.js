import React from 'react';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PokeList = ({ listOfPokemon }) => {

    let pokemon = listOfPokemon.map((monster) => {
        console.log(monster.name)
        return (
            <Col sm={6} md={4} key={monster.name}>
                <Link to={`:${monster.name}`}><ListGroupItem className='PokeList-item'>{monster.name}</ListGroupItem></Link>
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