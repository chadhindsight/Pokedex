// import $ from 'jquery';
// import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/pokeWall/PokeWall.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

let baseURL = "https://pokeapi.co/api/v2/pokemon/";

ReactDOM.render(
  <React.StrictMode>
    <Router><App baseURL={baseURL}/></Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
