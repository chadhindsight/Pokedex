import React from 'react';
import PropTypes from 'prop-types';

const Photo = (props) => {
    const post = props.post

    return (
        <div>
            <figure className="figure">
                <img className='photo' src={props.post.link} alt="pokemon goes here" />
                <figcaption> <p>{props.post.description}</p> </figcaption>
                <div className="button-container">
                    {/* pass to a callback inside onClick */}
                    <button className="remove-button" onClick={()=> props.removePhoto(post)}>Remove</button>
                </div>
            </figure>
        </div>
    );
};

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    removePhoto: PropTypes.func.isRequired
}

export default Photo;