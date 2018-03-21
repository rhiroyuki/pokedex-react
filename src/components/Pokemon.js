import React from 'react';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCaught: false };
  }

  setCaughtPokemonStyle = () => {
    const className = 'pokemon';

    if (this.state.isCaught) {
      return `${className} pokemon--caught`;
    }

    return className;
  }

  catchPokemon = () => {
    // eslint-disable-next-line no-restricted-globals
    if (this.state.isCaught && !confirm('Are you sure?')) {
      return;
    }
    this.setState({ isCaught: !this.state.isCaught });
  }

  render() {
    const { pokemon, index } = this.props;

    return (
      <div className={ this.setCaughtPokemonStyle() } onClick={ this.catchPokemon }>
        <img
          className="pokemon__image"
          alt={ pokemon.name }
          // eslint-disable-next-line global-require, import/no-dynamic-require
          src={ require(`../images/pokemons/${index}.svg`) }
          width="80"
          height="80"
        />
        <div className="pokemon__info">
          <span className="pokemon__number">#{ index }</span>
          <p className="pokemon__name">{ pokemon.name }</p>
        </div>
      </div>
    );
  }
}

export default Pokemon;
