import React from 'react';

// export const pokemonItems = pokemon.map(poke => (
//     <PokemonIndexItem key={poke.id} pokemon={poke} />
//     render (){
//        return() {
//             <section className="pokedex">
//                 <ul>{pokemonItems}</ul>
//             </section>
//     };
//     }
// );

class PokemonIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="pokedex">
                 <ul>{pokemonItems}</ul>
            </section>
        )
    }
}

export default PokemonIndexItem;



