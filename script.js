const num1 = document.querySelector('.form-control');
const num2 = document.querySelector('.form-control2');
const group = document.querySelector('.group-input3').style.display = "none";
const g1 = document.querySelector('.message2');
const g2 = document.querySelector('.message1');

function calc(){
   
  const resultado = parseFloat(num1.value) / parseFloat(num2.value);
   
   if (resultado >= 0.71){
    document.querySelector('.group-input3').style.display = "block";
  } else if(resultado <= 0.70){
    g1.style.display = "block";
    g2.style.display = "none";
    document.querySelector('.group-input3').style.display = "block";
  }
 };


 $(function() {
  $('#Preco1').maskMoney({ decimal: '.', thousands: '', precision: 2 });
})
$(function() {
  $('#Preco2').maskMoney({ decimal: '.', thousands: '', precision: 2 });
})

