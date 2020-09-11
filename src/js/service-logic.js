import $ from 'jquery';
export function getElements(response, money, currency) {
  let type = currency;
  if (type === "CAD") {
    $('#results').text(`you can convert your currency into ${response.conversion_rates.CAD * `${money}`}`);
  } else if (type === "AED"){
    $('#results').text(`you can convert your currency into ${response.conversion_rates.AED * `${money}`}`);
  } else if (type === "ARS") {
    $('#results').text(`you can convert your currency into ${response.conversion_rates.ARS * `${money}`}`);
  } else if (type === "AUD") {
    $('#results').text(`you can convert your currency into ${response.conversion_rates.AUD * `${money}`}`);
  } else {
    $('#results').text(`you can convert your currency into ${response.conversion_rates.EUR * `${money}`}`);
  }
}


// }

// export function getElementsUAE(response, money) {
//   console.log(response.conversion_rates.AED * `${money}`);
//   $('#results').text(`you can convert your currency into ${response.conversion_rates.AED * `${money}`}`);

// }
// export function getElementsARS(response, money) {
//   console.log(response.conversion_rates.ARS * `${money}`);
//   $('#results').text(`you can convert your currency into ${response.conversion_rates.ARS * `${money}`}`);
// }

// export function getElementsAUD(response, money) {
//   console.log(response.conversion_rates.AUD * `${money}`);
//   $('#results').text(`you can convert your currency into ${response.conversion_rates.AUD * `${money}`}`);
// }

// export function getElementsGER(response, money) {
//   console.log(response.conversion_rates.EUR * `${money}`);
//   $('#results').text(`you can convert your currency into ${response.conversion_rates.EUR * `${money}`}`);
// }