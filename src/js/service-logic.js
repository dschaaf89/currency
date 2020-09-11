import $ from 'jquery';
export function getElementsCanada(response, money) {
  console.log(response.conversion_rates.CAD * `${money}`);
  $('#results').text(`you can convert your currency into ${response.conversion_rates.CAD * `${money}`}`);
}

export function getElementsUAE(response, money) {
  console.log(response.conversion_rates.AED * `${money}`);
  $('#results').text(`you can convert your currency into ${response.conversion_rates.AED * `${money}`}`);

}
export function getElementsARS(response, money) {
  console.log(response.conversion_rates.ARS * `${money}`);
  $('#results').text(`you can convert your currency into ${response.conversion_rates.ARS * `${money}`}`);
}

export function getElementsAUD(response, money) {
  console.log(response.conversion_rates.AUD * `${money}`);
  $('#results').text(`you can convert your currency into ${response.conversion_rates.AUD * `${money}`}`);
}

export function getElementsGER(response, money) {
  console.log(response.conversion_rates.EUR * `${money}`);
  $('#results').text(`you can convert your currency into ${response.conversion_rates.EUR * `${money}`}`);
}