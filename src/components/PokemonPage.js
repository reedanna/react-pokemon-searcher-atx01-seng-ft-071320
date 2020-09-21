import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor() {
    super()

    this.state = {
      allPokemon: [],
      pokemonList: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(data => {
        this.setState({
          allPokemon: data,
          pokemonList: data
        })
      })
  }

  searchPokemon = (input) => {
    let filteredPokemon = this.state.allPokemon.filter(pokemon => pokemon.name.includes(input))
    this.setState({
      pokemonList: filteredPokemon
    })
  }

  addPokemon = (newPokemon) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokemon),
    })
      .then(
        fetch('http://localhost:3000/pokemon')
          .then(response => response.json())
          .then(data => {
            this.setState({
              allPokemon: data,
              pokemonList: data
            })
          })
      )
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search searchPokemon={this.searchPokemon} searchValue={this.state.search} />
        <br />
        <PokemonCollection pokemonList={this.state.pokemonList} />
      </Container>
    )
  }
}

export default PokemonPage
