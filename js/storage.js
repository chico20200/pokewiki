export function saveSearch(pokemon) {
    let searches = JSON.parse(localStorage.getItem("searches")) || [];

    searches.push(pokemon);

    localStorage.setItem("searches", JSON.stringify(searches));
}

export function getSearches() {
    return JSON.parse(localStorage.getItem("searches")) || [];
}