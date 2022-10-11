import './css/styles.css';
const DEBOUNCE_DELAY = 300;

import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';
import { generateMarkupList, generateCardList } from './js/createMarkups';
import getRefs from './js/getRefs';

const refs = getRefs();

refs.input.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

function handleInput(event) {
  const findCountry = event.target.value.trim().toLowerCase();

  if (!findCountry) {
    refs.countryList.innerHTML = '';
    refs.countryCard.innerHTML = '';
    return
  }

  fetchCountries(findCountry)
    .then(renderCountryList)
    .catch(error => {
      refs.countryList.innerHTML = '';
      Notify.failure('Oops, there is no country with that name')});
}

function renderCountryList(country) {
  if (country.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    refs.countryList.innerHTML = "";
    refs.countryCard.innerHTML = "";
  }
  if (country.length >= 2 && country.length <= 10) {
    refs.countryList.innerHTML = generateMarkupList(country);
    refs.countryCard.innerHTML = "";
  }
  if (country.length === 1) {
    refs.countryList.innerHTML = '';
    refs.countryCard.innerHTML = generateCardList(country);
  }
}
