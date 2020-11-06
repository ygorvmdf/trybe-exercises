import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
    render() {
        return pokemons.map(pokemon =>
            <Pokemon key={pokemon.id} pokemon={pokemon} />
        );
    }
}

export default Pokedex;

Pokedex.propType = {
    pokemon: PropTypes.object,
    key: PropTypes.number,
}
