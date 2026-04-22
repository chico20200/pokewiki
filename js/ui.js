import {getTypes} from "./api.js";
export function renderPokemon(data) {
const id = document.getElementById("pokemon-id");
const name = document.getElementById("pokemon-name");
const typeElement = document.getElementById("type");
    typeElement.innerHTML = "";    

const pokeImage = document.getElementById("pokemon-image");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const experience = document.getElementById("experiencia");
const abilities = document.getElementById("abilities");
const stats = document.getElementById("stats");

if (!data) {
    // alert("Pokémon no encontrado");
    id.textContent = "";
    name.textContent = "El pokemon no existe";
    pokeImage.src = "https://imgs.search.brave.com/PyYszYxFjQUxzt-ffMJaG8uBQ1qWFF4d4a6bZC65zaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcmNo/aXZlcy5idWxiYWdh/cmRlbi5uZXQvbWVk/aWEvdXBsb2FkL3Ro/dW1iLzAvMDAvQmFn/X1BvayVDMyVBOV9C/YWxsX1NWX1Nwcml0/ZS5wbmcvMTIwcHgt/QmFnX1BvayVDMyVB/OV9CYWxsX1NWX1Nw/cml0ZS5wbmc";
    height.textContent = "";
    weight.textContent = "";
    experience.textContent = "";
    abilities.innerHTML = "";
    stats.innerHTML = "Ingresa un nombre o ID válido";
    return;
}else { 
    id.textContent = `#${data.id}`;
    name.textContent = data.name;
     


    for (const typeInfo of data.types) {
        const typeName = typeInfo.type.name;
        const typeData = getTypes(typeName)
            .then(typeData => { 
                let sprites = typeData.sprites;
                let icon = sprites["generation-viii"]["sword-shield"]["symbol_icon"];
                typeElement.innerHTML += `<div class="type">
                    <img src="${icon}" alt="${typeName}">
            
                </div>`;
                
            })
    }

    pokeImage.src = data.sprites.front_default;

    height.textContent =
        `Altura: ${data.height / 10} m`;

    weight.textContent =
        `Peso: ${data.weight / 10} kg`;

    experience.textContent =
        `Experiencia: ${data.base_experience}`;

    // habilidades
    const abilitiesList = data.abilities
        .map(a => `<li>${a.ability.name}</li>`)
        .join("");
    abilities.innerHTML = `<h3>Habilidades:</h3><ul>${abilitiesList}</ul>`;
    // abilities.innerHTML = abilitiesList;

    // stats
    const statsList = data.stats
        .map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`)
        .join("");

    stats.innerHTML = statsList;

}
}