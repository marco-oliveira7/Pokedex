

function convertPokemonToHtml(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
        <span id="pokemonNumber">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                
            <img src="${pokemon.photo}"
            alt="${pokemon.name}">
        </div>
    </li>
`
}

const pokemonList = document.getElementById('pokemonList')
pokeApi.getPokemons().then((pokemons = []) => {

    // Utilizando o metodo map exemplificado
    pokemonList.innerHTML = pokemons.map(convertPokemonToHtml).join('')
})
