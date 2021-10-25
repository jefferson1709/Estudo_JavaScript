console.log(`Trabalhando com listas`);
// const salvador = `Alagoas`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Minas Gerais`;

const listaDeDestinos = new Array(
    `Alagoas`,
    `São Paulo`,
    `Minas Gerais`
);

listaDeDestinos.push(`Curitiba`) // adicionando um item na lista
console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);