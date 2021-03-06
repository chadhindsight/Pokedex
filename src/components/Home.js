import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

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
            
            <ScrollIntoView selector=".how-it-works" style={{animation: 'fadeAndScale .9s ease-in'}}>
                <img src="https://image.flaticon.com/icons/svg/528/528098.svg" id="pikachu"
                    alt="pikachu" height="50px" />
            </ScrollIntoView>

            <div className="how-it-works" style={{ animation: 'fadeAndScale .9s ease-in' }}>   
            <h1 className="how-it-works-text">How it Works</h1>    
                <h4 className="how-it-works-text">Pokémon Hub has three main sections:</h4>
                <ul className="how-it-works-text">
                    <li>A Pokédex where you can learn about any Pokémon you want</li>
                    <li>An instagram-like photo collection where you can post and share pictures</li>
                    <li>A game page inspired by the classic game that started it on.</li>
                </ul>
            </div>    
        </div>
    );
};

export default Home; 