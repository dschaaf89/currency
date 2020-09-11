import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { getElements } from './js/service-logic.js';
$(document).ready(function () {

  $('#currencyType').click(function () {
    event.preventDefault();
    let currency =$('#typeOfCurrency').val();
    let money = $('#money').val();
    let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response, money, currency);
        $('#resultsbox').show();
      }else{
        reject(request.response);
        
      }
    };
  });
});










