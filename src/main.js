import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { getElementsCanada } from './js/service-logic.js';
$(document).ready(function () {

  $('#Canada').click(function () {
    event.preventDefault();
    let money = $('#money').val();
    let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElementsCanada(response, money);
      }
    };
  });
});










// $('#Canada').click(function () {
//   event.preventDefault();
//   let money = $('#money').val();
//   let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
//   let request = new XMLHttpRequest();
//   request.open("GET", url, true);
//   request.send();

//   request.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElementsCanada(response);
//     }
//   };

//   function getElementsCanada(response) {
//     console.log(response.conversion_rates.CAD * `${money}`);
//     $('#results').text(`you can convert your currency into ${response.conversion_rates.CAD * `${money}`}`);
//   }

// });
// $('#UAE').click(function () {
//   event.preventDefault();
//   let money = $('#money').val();


//   let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
//   let request2 = new XMLHttpRequest();
//   request2.open("GET", url, true);
//   request2.send();

//   request2.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElementsUnitedArabEmirates(response);
//     }
//   };

//   function getElementsUnitedArabEmirates(response) {
//     console.log(response.conversion_rates.AED * `${money}`);
//     $('#results').text(`you can convert your currency into ${response.conversion_rates.AED * `${money}`}`);
//   }
// });
// $('#ARS').click(function () {
//   event.preventDefault();
//   let money = $('#money').val();


//   let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
//   let request3 = new XMLHttpRequest();
//   request3.open("GET", url, true);
//   request3.send();

//   request3.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElementsARS(response);
//     }
//   };

//   function getElementsARS(response) {
//     console.log(response.conversion_rates.ARS * `${money}`);
//     $('#results').text(`you can convert your currency into ${response.conversion_rates.ARS * `${money}`}`);
//   }
// });
// $('#AUD').click(function () {
//   event.preventDefault();
//   let money = $('#money').val();


//   let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
//   let request4 = new XMLHttpRequest();
//   request4.open("GET", url, true);
//   request4.send();

//   request4.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElementsAUD(response);
//     }
//   };

//   function getElementsAUD(response) {
//     console.log(response.conversion_rates.AUD * `${money}`);
//     $('#results').text(`you can convert your currency into ${response.conversion_rates.AUD * `${money}`}`);
//   }
// });
// $('#GER').click(function () {
//   event.preventDefault();
//   let money = $('#money').val();


//   let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
//   let request5 = new XMLHttpRequest();
//   request5.open("GET", url, true);
//   request5.send();

//   request5.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElementsGER(response);
//     }
//   };

//   function getElementsGER(response) {
//     console.log(response.conversion_rates.EUR * `${money}`);
//     $('#results').text(`you can convert your currency into ${response.conversion_rates.EUR * `${money}`}`);
//   }
// });