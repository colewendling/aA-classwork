export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}

export const fetchSinglePokemon= () => {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${id}`
  })
}