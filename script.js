const num1 = document.querySelector('.form-control');
const num2 = document.querySelector('.form-control2');
const group = document.querySelector('.group-input3').style.display = "none";
const g1 = document.querySelector('.message2');
const g2 = document.querySelector('.message1');

function calc(){
   
  const resultado = parseFloat(num1.value) / parseFloat(num2.value);
   
   if (resultado >= 0.70){
    document.querySelector('.group-input3').style.display = "block";
  } else if(resultado <= 0.69){
    g1.classList.add('ativo');
    g2.classList.remove('message1');
    document.querySelector('.group-input3').style.display = "block";
  }
 };



