import React from 'react';

const Photo = (props) => {

    return (
        <div>
            <figure className="figure">
                    <img className='photo' src={props.post.imageLink} alt="pokemon goes here"/>
                    <figcaption><p>{props.post.description}</p></figcaption>
                <div className="button-container"><button className="remove-button">Remove</button></div>
            </figure>
        </div>
    );
};

export default Photo;