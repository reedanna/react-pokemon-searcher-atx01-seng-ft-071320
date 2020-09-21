import React from 'react'

class Search extends React.Component {

  handleInput = (event) => {
    this.props.searchPokemon(event.target.value)
  }

  render() {
    return (
      <div className="ui search" >
        <div className="ui icon input">
          <input className="prompt" name="search" onChange={(event) => this.handleInput(event)} />
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
