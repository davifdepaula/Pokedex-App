

export async function searchPokemon(pokemon) {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
      }catch(error){
        console.log("error: ", error)
      }  
    }

export async function pokemonGrid(limit = 20, offset = 0) {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      const response = await fetch(url)
      return await response.json()
    }catch(error){
      console.log("error: ", error)
    }  
  }

export async function getPokemonData(url) {
    try {
        const response = await fetch(url)
        return await response.json()
    }catch(error){
        console.log("error: ", error)
}  
}

  