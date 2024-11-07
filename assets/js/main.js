
const offset = 0
const limit = 10
const urlPokedex = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(urlPokedex).then({function (response){
    console.log(response)
}})
