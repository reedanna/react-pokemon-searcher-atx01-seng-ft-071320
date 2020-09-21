import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor() {
    super()
    this.state = {
      frontSprite: true
    }
  }

  toggleSprite = () => {
    if (this.state.frontSprite) {
      this.setState({
        frontSprite: false
      })
    }
    else {
      this.setState({
        frontSprite: true
      })
    }
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.state.frontSprite ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt="oh no!" onClick={this.toggleSprite} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
