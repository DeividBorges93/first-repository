import React from "react";
import pokemons from "./data";

class Pokemon extends React.Component {
  render() { 
    return (

      <div className='container' >
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className='pokemon'>
            <h2>{pokemon.name}</h2>
            <h3>{pokemon.type}</h3>
            <h3>Peso médio: {pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</h3>
            <img src={pokemon.image} ></img>
          </div>
        ))}
      </div>
    );
  }
}

export default Pokemon;