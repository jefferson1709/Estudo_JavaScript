console.log("Conversão de Tipos");

// tipo de dado 
// booleanos 

// conversão implícita
const numero = 456;
const numeroString = Number("456a");

//Number()
//String()
console.log(numero + numeroString)

// conversão explícita

console.warn(new Error('oi'))

console.log("ano" + 2021);
console.log("2" + "2");
console.log(parseInt("2") + parseInt("2"));

console.log("7" / "2");
console.log("Jefferson" / "2"); //Not a Number

console.log(6.5);
console.log(6,5);

// declaração de função

function minhaFuncao(param) {
    // bloco de código
  }
  
  minhaFuncao("param")
  
  // expressão de função
  
  const soma = function(num1, num2) { return num1 + num2 }
  console.log(soma(1, 1))
  
  // diferença principal: HOISTING
  // funções e var são "listadas" no topo do arquivo.
  
  console.log(apresentar())
  
  function apresentar() {
    return "olá";
  }
  
  console.log(somaOutroExemplo(1, 1))
  const somaOutroExemplo = function(num1, num2) { return num1 + num2 }
