//Inside this file, we'll define functions that make ajax requests, fetching information from our rails api.

import { $CombinedState } from "redux"

// Export a function called fetchAllPokemon that returns a promise.
// The function should make an AJAX request that will make a http request to our PokemonController#index endpoint.
// Run rails routes to determine the appropriate url for this request.

export const fetchAllPokemon = () => {
    return $.ajax({
        method: "GET",
        url: "/api/pokemon"
    })
}

export const fetchSinglePokemon = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/pokemon/${id}`
    })
}
