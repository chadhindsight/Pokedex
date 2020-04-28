import React, { Component } from 'react';
import axios from 'axios';
import PokeList from './components/PokeList';
import { Col} from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination'
// import PageItem from 'react-bootstrap/PageItem'

class App extends Component {
  state = {
    pokemon: [],
    activePage: 0,
    limit: 40,
    // Every time we change page, we need to update the offset. Might remove this later
    offset: 0,
    totalPages: 0
  }

  // Doing func this way sets the 'this' context so you dont need to use a bind method
  loadPokemon = async (url) => {

    try {
      let res = await axios.get(url)
        console.log(res)
        
        let pages = Math.round(res.count / this.state.limit)
        this.setState({
          pokemon: [...res.data.results],
          totalPages: pages,
          count: res.count
        })
      }
      //Error Handling if request fails
      catch (err) {
        console.log(`The error is ${err}`);
      }
    
  }
  // Load first set of pokemon once component renders
  componentDidMount() {
    this.loadPokemon(this.props.baseURL) 
  }

  //This method fires when a user clicks a different page and returns result of a new call to the related endpoint
handlePaginationSelect =(page) =>{
  console.log(page)
  // Fix offset later
  let offset =this.state.limit * Number(page.target.innerText)
  this.loadPokemon(`${this.props.baseURL}?limit=${this.state.limit}&offset=${offset}`);
}

// PAGINATION LOGIC
 pagination = ()=> {
    let items = [];
   
    for (let number = 1; number <= 5; number++) {
     items.push(
       <Pagination.Item key={number}>
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
    console.log(this.state.pokemon)
        if (this.state.pokemon.length === 0) { return '...loading' }
    
        return (
       <div>   
        <Col sm={8} md={12} smoffset={2} mdoffset={1}>
          <PokeList listOfPokemon={this.state.pokemon} />
        </Col>

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