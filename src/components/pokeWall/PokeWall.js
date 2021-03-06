import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const PokeWall = (props) => {
    return (
        <div className="photoGrid">
            <Link to="/addphotos" className="addIcon"></Link>
            {props.posts.map((post, index) => <Photo key={index} post={post} removePhoto={props.removePhoto}/>)}
        </div>
    );
};

//Make sure the correct type of props are being passed
PokeWall.propTypes = {
    removePhoto: PropTypes.func.isRequired
}

export default PokeWall;