

const getPokemon = async () => {

    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`+ pokeInput)
    if(res.status != 200) {
        document.getElementById("pokeImg").src = "./images/huh.png";
        document.getElementById("pokeN").innerHTML = "Pokemon No Encontrado, asegurate de escribir el nombre correcto del Pokemon";
    }
    const data = await res.json();
    console.log(data);

    const pokemon = {
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.pokeInput}.png`,
        imgJuego: data.sprites.front_default,
        imgCvg: data.sprites.other.dream_world.front_default,
        nombre: data.name,
        tipo : data.types[0].type.name,
        peso : data.weight,
        altura: data.height,
        experiencia: data.base_experience,
        hp: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        especial: data.stats[3].base_stat
    };
    const moves = data.moves.map((typ) => typ.move.name)
    moves.forEach(function (element){
        document.getElementById("moves").innerHTML += "<li>" + element + "</li>"
    })
    setPokemon(pokemon);
}

const setPokemon = (pokemon) => {
    document.getElementById("pokeN").innerHTML = pokemon.nombre.toUpperCase()+"!";
    document.getElementById("pokeImg").src = pokemon.imgCvg;
    document.getElementById("stats").innerHTML = "Estadisticas del Pokemon"
    document.getElementById("type").innerHTML = "Tipo: " + pokemon.tipo;

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Peso', 'Altura', 'Vida', 'Experiencia', 'Ataque', 'Defensa', 'Especial'],
        datasets: [{
            label: 'Nivel',
            data: [pokemon.peso, pokemon.altura, pokemon.hp, pokemon.experiencia, pokemon.ataque, pokemon.defensa, pokemon.especial],
            backgroundColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


}




