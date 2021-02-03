import React from 'react';
import { Link } from "react-router-dom";

class PokemonIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                <Link to={`/pokemon/${this.props.pokemon.id}`}>
                </Link>
            </li>
        )
    }
}

export default PokemonIndexItem;



