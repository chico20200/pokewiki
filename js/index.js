
import { getPokemon } from "./api.js";
import { renderPokemon } from "./ui.js";
import { saveSearch } from "./storage.js";
console.log("Aplicación iniciada");
const input = document.getElementById("search_input");
const button = document.getElementById("search_button");

button.addEventListener("click", async () => {
    const value = input.value.toLowerCase().trim();
    console.log("Buscando Pokémon:", value);
    if (!value) return;

    try {
        const data = await getPokemon(value);

        renderPokemon(data);
        saveSearch(value);

    } catch (error) {
        console.error("Error al obtener el Pokémon:", error);
    }
});