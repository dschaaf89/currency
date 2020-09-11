import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function () {
  $('#Canada').click(function () {
    event.preventDefault();
    let money = $('#money').val();
    console.log(money);

    let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };



  


    function getElements(response) {
      if (response) {
        console.log(response.conversion_rates.CAD * `${money}`);
        //$('#results').text(`you can convert your currency into ${response.conversion_rates.${currency}*${money}}`)
      }
    }





  });
});