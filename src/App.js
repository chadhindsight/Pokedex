import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PokeDetails from './components/PokeDetails';
import PokeList from './components/PokeList';
import { Col} from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination'
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  state = {
    pokemon: [],
    activePage: 1,
    limit: 40,
    // Every time we change page, we need to update the offset. Might remove this later
    offset: 0,
    totalPages: 0
  }

  // Making a func this way sets the 'this' context so you dont need to use a bind method
  loadPokemon = async (url) => {
    try {
      let res = await axios.get(url)
        
        let pages = Math.round(res.data.count / this.state.limit)
        this.setState({
          pokemon: [...res.data.results],
          totalPages: pages,
          count: res.count
        })
        console.log(this.state.totalPages)
      }
      //Error Handling if the request fails
      catch (err) {
        console.log(`A ${err} was returned. Something is off :(`) ;
      }
    
  }
  // Load initial set of pokemon once component renders
  componentDidMount() {
    this.loadPokemon(this.props.baseURL) 
  }
// Displays the information for the selected pokemon
selectPokemon = (selectedPokemon) =>{

}

  //This method fires when a user clicks a different page and returns result of a new call to the related endpoint
handlePaginationSelect =(page) =>{
  // Fix offset later
let offset =this.state.limit * Number(page.target.innerText)
  this.loadPokemon(`${this.props.baseURL}?limit=${this.state.limit}&offset=${offset}`);
}

// PAGINATION LOGIC BASED ON VALUE OF TOTAL PAGES IN STATE OBJECT
 pagination = ()=> {
    let items = [];

    for (let number = 1; number <= this.state.totalPages; number++) {
     items.push(
       <Pagination.Item key={number} className="buns">
         {number}
       </Pagination.Item>
     );
   }

  return(
    <div>
      <Pagination onClick={this.handlePaginationSelect}>{items}
        <Pagination.Ellipsis />
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  )
 };

  render() {
        if (this.state.pokemon.length === 0) { return '...loading' }
    
        return (
       <div>   
        <Col sm={8} md={12} smoffset={2} mdoffset={1}>
          <PokeList listOfPokemon={this.state.pokemon} />
        </Col>
          <Switch>
              <Route path='/pokemon/:id' component={props => <PokeDetails {...props} pokemon={this.state.pokemon}/>} />
          </Switch>
            <Col sm={12}>
            {this.pagination()}
            </Col> 
      </div>  
    );
  }
}

// sm = { 8} md = { 10} smOffset = { 2} mdOffset = { 1}
//  <Pagination.Item>{1}</Pagination.Item>
export default App;