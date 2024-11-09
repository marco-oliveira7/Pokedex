
const offset = 0
const limit = 10
const urlPokedex = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToHtml(pokemon) {
    return `
        <li class="pokemon">
                <span id="pokemonNumber">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                        alt="${pokemon.name}">
                </div>
            </li>
        `
}

const pokemonList = document.getElementById('pokemonList')

fetch(urlPokedex)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {

        pokemons.forEach(pokemon => {

            pokemonList.innerHTML += convertPokemonToHtml(pokemon)

        });
    })
    .catch((error) => console.error(error))
