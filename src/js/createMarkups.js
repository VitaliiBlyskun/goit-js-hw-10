function createMarkupList(data) {
    return `<div class="country-list-info">
            <img src="${data.flags.svg}" alt=${data.name} width = 50px height = 40px">
            <h2 class="country-name">${data.name}</h2>
        </div>`;
    }
    
export function generateMarkupList(array) {
        return array.reduce((acc, item) => acc + createMarkupList(item), "")
    }


function createCard(data) {
    console.log(data);
    const lang = data.languages.map(language => language.name).join(", ");
    return `<div class="country-card-info">
        <img src="${data.flags.svg}" alt="country-flag" width = 80px height = 60px">
        <h2 class="country-name">${data.name}</h2>
        <p class="capital-info">Capital: ${data.capital}</p>
        <p class="capital-info">Population: ${data.population}</p>
        <p class="capital-info">Languages: ${lang}</p>
</div>`
}

export function generateCardList(array) {
    return array.reduce((acc, item) => acc + createCard(item), "")
}