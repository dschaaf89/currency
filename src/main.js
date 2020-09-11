import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { getElements } from './js/service-logic.js';

$(document).ready(function () {
  event.preventDefault();
  $('#currencyType').click(function () {
    let currency = $('#typeOfCurrency').val();
    let money = $('#money').val();


    let promise = new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
          getElements(this.response,money,currency);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
    promise.then(function(response) {
      const body = JSON.parse(response);
      
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });

  });
});










