const BASE_URL = "https://restcountries.com/v2";
const FETCH_RESPONSE = "name,capital,population,flags,languages"
export function fetchCountries(name) {
    return fetch(`${BASE_URL}/name/${name}?fields=${FETCH_RESPONSE}`).then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      });
}