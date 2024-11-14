
const loadMoreButton = document.getElementById("loadMoreButton")
const pokemonList = document.getElementById('pokemonList')
let limit = 10
let offset = 0
const maxLimit = 151

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

function loadMorePokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        // Utilizando o metodo map exemplificado
        pokemonList.innerHTML = pokemons.map(convertPokemonToHtml).join('')
    })
}

loadMorePokemons(offset, limit)

loadMoreButton.addEventListener('click', function(){
    limit += 10

    if (limit >= maxLimit) {
        offset = 0
        limit = 151
        loadMorePokemons(offset, limit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
    else{
        loadMorePokemons(offset, limit)
    }
})