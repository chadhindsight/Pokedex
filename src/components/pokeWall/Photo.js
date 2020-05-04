import React from 'react';

const Photo = (props) => {
    const post = props.post

    return (
        <div>
            <figure className="figure">
                <img className='photo' src={props.post.imageLink} alt="pokemon goes here" />
                <figcaption> <p>{props.post.description}</p> </figcaption>
                <div className="button-container">
                    {/* pass to a callback inside onClick */}
                    <button className="remove-button" onClick={()=> props.removePhoto(post)}>Remove</button>
                </div>
            </figure>
        </div>
    );
};

export default Photo;