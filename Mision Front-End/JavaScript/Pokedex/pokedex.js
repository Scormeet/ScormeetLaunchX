
const getPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/`+ pokeInput
    fetch(url).then((res) => {
        console.log(res)
        return res.json();
    })
}

getPokemon();