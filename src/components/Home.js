import React from 'react';


const Home = (props) => {
    return (
        <div className="home">
           <p className='intro'>
                Welcome to Pokémon Hub. This is your one stop shop for all things Pokémon releated. Pokémon started as 
                a series of video games developed by Game Freak and published by Nintendo and The Pokémon Company as part of the Pokémon media franchise. Created by Satoshi Tajiri with assistance from Ken Sugimori, 
                the first games released in 1996 in Japan for the Game Boy, and the main series of role-playing video games (RPGs), 
                also referred to as the "core series" by their developers. 
                Since 1996, the games have continued to be release on each generation of Nintendo's handhelds and
                 also branced off into different forms of media and has since become the highest-grossing media franchise of all time. 
                 This site gives you a platform to celebrate, express, and share your love of Pokémon with others from across the globe.            
                </p>
             <div className="how-it-works">   
            <img src="https://image.flaticon.com/icons/svg/528/528098.svg" id="pikachu" alt="pikachu" height="50px" />
            <h2>How it Works</h2>    
                <p>Pokémon Hub has three main parts:</p>
                <ul>
                    <li>A Pokédex where you can learn about any Pokémon you want</li>
                    <li>An instagram-like photo collection where you can post and pictures</li>
                    <li>A game page inspired by the classic game that started it on.</li>
                </ul>
            </div>    
        </div>
    );
};

export default Home; 