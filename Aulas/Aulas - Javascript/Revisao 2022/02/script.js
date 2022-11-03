 //while = enquato
 /*
 var x = 5;
 while(x< 10){
  document.write("<br> O valor do X é: " + x);

  //Aumentando o valor do x
  x++;
 }
*/

// for = para
 /*
var valor = 15;
for (a = 0; a< valor; a++){
  document.write("<br> O valor do A é: " + x);
  console.log(a+10)
}
*/

// switch = comutador
function pedir(){
  var valor = prompt("Digite um valor de 1 a 4");

  switch(Number(valor)){
    case 1: 
      alert("Voce escolheu 1 = Suco");
      break;
    case 2: 
      alert("Voce escolheu 2 = Agua gelada");
      break;
    case 3: 
      alert("Voce escolheu 3 = Sorvete");
      break;
    case 4: 
      alert("Voce chamou o garcom");
      break;
    default: 
      alert("escolha uma opcao entre 1 a 4");
      break;
  }
}