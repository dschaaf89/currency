import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



$(document).ready(function () {
  $('#currency').submit(function () {
    event.preventDefault();
    let currency = $('select#typeOfCurrency').val();
    let money = $('#money').val();
    console.log(money,currency);


    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

    let request = new XMLHttpRequest();

    request.open("GET", url, true);

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    function getElements(response) {
      

    }



  });
});