import React from 'react';

import PokemonList from '../components/PokemonList';
import API from '../api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
    };

    this.fetchPokemons = this.fetchPokemons.bind(this);
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    API.get('/')
      .then((response) => {
        this.setState({ pokemons: response.data });
      });
  }

  render() {
    return (
      <div>
        {
          !!this.state.pokemons.length &&
          <PokemonList pokemons={ this.state.pokemons }></PokemonList>
        }
      </div>
    );
  }
}

export default App;
