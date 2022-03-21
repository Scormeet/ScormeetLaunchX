

const getPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/`+ pokeInput
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            document.getElementById("pokeN").innerHTML = "Pokemon No Encontrado :(";
            setPokeImg("./images/huh.png"); 
        }
        else
            return res.json();
    }).then((data) => {
        document.getElementById("pokeN").innerHTML = pokeInput.toUpperCase()+"!";
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        setPokeImg(pokeImg);
    })
}


const setPokeImg = (url) => {
    const pokeImg = document.getElementById("pokeImg")
    pokeImg.src = url;
}


