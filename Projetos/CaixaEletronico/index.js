class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "jefferson";
cliente1.cpf = 12345678999;
cliente1.agencia = 1001;
cliente1.saldo = 0;


cliente2.nome = "jasmine";
cliente2.cpf = 12345678988;
cliente2.agencia = 1001;
cliente2.saldo = 0;


const cliente3Nome = "Alice";
const cliente3CPF = 12345678977;
const cliente3Agencia = 1001;
const cliente3Saldo = 0;
console.log(cliente1, cliente2);