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
          count: res.coun
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
//This fires when a user clicks a different page
handlePaginationSelect =() =>{
  
}

  render() {
    console.log(this.state.pokemon)
        if (this.state.pokemon.length === 0) { return '...loading' }
    
        return (
       <div>   
        <Col sm={8} md={12} smoffset={2} mdoffset={1}>
          <PokeList listOfPokemon={this.state.pokemon} />
        </Col>

            <Col sm={12}>
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Col>
      </div>  
    );
  }
}

// sm = { 8} md = { 10} smOffset = { 2} mdOffset = { 1}

export default App;