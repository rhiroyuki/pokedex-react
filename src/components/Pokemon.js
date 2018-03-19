import React from 'react'

const Pokemon = (props) => {
  const { pokemon, index } = props

  return (
    <div className="pokemon pokemon--entry">
      <img
        className="pokemon__image"
        alt={ pokemon.name }
        src={ require("../images/pokemons/" + index + ".svg") }
        width="80"
        height="80"
      />
      <div className="pokemon__info">
        <span className="pokemon__number">#{ index }</span>
        <p className="pokemon__name">{ pokemon.name }</p>
      </div>
    </div>
  )
}

export default Pokemon
