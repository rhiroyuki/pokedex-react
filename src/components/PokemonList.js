import React from 'react';

import Pokemon from './Pokemon';

const PokemonList = (props) => {
  const { pokemons } = props;

  const renderMessage = pokemonsList => (
    pokemonsList.map((element, index) => (
      <div className="pokedex__entry" key={ index }>
        <Pokemon pokemon={ element } index={ index + 1 }></Pokemon>
      </div>
    ))
  );

  return (
    <div className="pokedex">
      { pokemons && renderMessage(pokemons) }
    </div>
  );
};

export default PokemonList;
