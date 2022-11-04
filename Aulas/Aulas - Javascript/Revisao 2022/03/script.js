/*
abaixo de 17 muito muito abaixo do peso
Entre 17 e 18.49 Abaixo do peso
Entre 18.5 e 18.49 peso normal
Entre 25 e 29.99 Acima do peso
*/

// peso / (altura*altura);

var peso;
var altura;
var imc;
var resultado;


function calcular(event){
  event.preventDefault();

  peso = document.getElementById('peso').value;
  altura = document.getElementById('altura').value;
  
  //console.log(peso);
  //console.log(altura);

  imc = peso / (altura * altura);

  if(imc < 17){
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/>  Seu resultado foi: '+ imc + '<br/>  Cuidado voce esta muito abaixo do peso '
  } else if(imc > 17 && imc <= 18.49){
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/>  Seu resultado foi: '+ imc + '<br/>  voce esta abaixo do peso '
  } else if(imc > 18.5 && imc <= 24.99){
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/>  Seu resultado foi: '+ imc + '<br/>  voce esta no peso ideal '
  } else if(imc > 25 && imc <= 29.99){
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/>  Seu resultado foi: '+ imc + '<br/>  voce esta acima do peso '
  }else if(imc > 30){
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/>  Seu resultado foi: '+ imc + '<br/> cuidado voce esta obeso'
  }

  document.getElementById('peso').value = '';
  document.getElementById('altura').value = '';

}