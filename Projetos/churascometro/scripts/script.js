//Carne - 400gr por pessoa + 6 horas - 650
//Cerveja - 1200 ml por pessoa + 6 horas - 2000ml
//Refrigerante/agua - 1000ml por pessoa + 6 horas - 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando....");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao);
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    console.log(qdtTotalCarne)
    console.log(qdtTotalCerveja)
    console.log(qdtTotalBebidas)

    resultado.innerHTML =  `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML =  `<p>${Math.ceil( qdtTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML =  `<p>${Math.ceil( qdtTotalBebidas / 1000)} L de Bebidas</p>`
}

function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}
function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}
function bebidas(duracao){
    if (duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

