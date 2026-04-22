const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export async function getPokemon(pokemon) {
    try {
        const response = await fetch(BASE_URL + pokemon);

        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getTypes(type) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);

        if (!response.ok) {
            throw new Error("Tipo no encontrado");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        throw error;
    }
}