const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const pokemonImage = document.getElementById("pokemon-image");
const pokemonName = document.getElementById("pokemon-name");
const pokemonID = document.getElementById("pokemon-id");
const pokemonTypes = document.getElementById("type");
const pokemonStats = document.getElementById("stats");

const pokemonHeight = document.getElementById("height");
const pokemonWeight = document.getElementById("weight");
const pokemonAbilities = document.getElementById("abilities");
const pokmonExperience = document.getElementById("experience");

searchButton.addEventListener("click", async () => {
    const pokemonName = searchInput.value.toLowerCase();
    try {
        const response = await fetch(`${BASE_URL}${searchInput.value.toLowerCase()}`);
        const data = await response.json();
        console.log(data);
        pokemonImage.src = data.sprites.front_default;
        pokemonName.textContent = data.name;
        pokemonID.textContent = `#${data.id.toString().padStart(3, '0')}`;
        pokemonTypes.innerHTML = data.types.map(type => type.type.name).join(', ');
        pokemonStats.innerHTML = data.stats.map(stat => `<p>${stat.stat.name}: ${stat.base_stat}</p>`).join('');
        pokemonHeight.textContent = `Height: ${data.height / 10} m`;
        pokemonWeight.textContent = `Weight: ${data.weight / 10} kg`;
        pokemonAbilities.innerHTML = data.abilities.map(ability => ability.ability.name).join(', ');
        pokmonExperience.textContent = `Experience: ${data.base_experience}`;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
});

// searchButton()