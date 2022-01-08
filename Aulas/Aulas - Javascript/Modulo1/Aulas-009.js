console.log(`Trabalhando com Funções`);

// parâmetros de função

              //2       //2
// function soma(numero1, numero2) {
//   return numero1 + numero2;
// }

// console.log(soma(2, 2))
// console.log(soma(245, 20))
// console.log(soma(-500, 60))

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
  }
  
  // console.log(nomeIdade(40, "Juliana"))
  
  function soma(numero1, numero2) {
    return numero1 + numero2;
  }
  
  function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
  }
  
                              //9
  console.log(multiplica(soma(4, 5)))  

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
  

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
                      //2 -> valor de soma()
                      function imprimeTexto(texto) {
                        console.log(texto)
                      }
                      
                      // 2) executa a função (1 ou + vezes)
                      
                      imprimeTexto(soma());
                      // imprimeTexto("outro texto");
                      
                      // três formas de escrever funções
                      
                      function soma(){
                        //outros códigos
                        //vários console.log()
                        return 2 + 2;
                      }
                      
                      // console.log(soma())

// let x = "";
// console.log(x);
// x = "oi";


const numero = 1;
// const minhaVar = "oi";
console.log(minhaVar);


function apresentar(nome) {
    return `meu nome é ${nome}`;
  }
  
  // Arrow function
  const apresentarArrow = nome => `meu nome é ${nome}`;
  const soma = (num1, num2) => num1 + num2;
  
  //Arrow function com + de 1 linha de instrução
  
  const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
      return "somente números de 1 a 9"
    } else {
      return num1 + num2;
    }
  }
  
  // Hoisting: arrow function se comporta como expressão
  
  // operador maior ou igual que
  // >=

//Ternario
const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
  console.log("cerveja")
} else {
  console.log("suco")
}

            //condição                    //true     //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")


//Template string
const nome = "Ju";
const idade = 2021-1981;
const cidadeDeNascimento = "São Paulo";

// const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)