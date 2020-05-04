import React from 'react';
import Photo from './Photo';

const PokeWall = (props) => {
    return (
        <div className="photoGrid">
            {props.posts.map((post, index) => <Photo key={index} post={post} />)}
        </div>
    );
};

export default PokeWall;