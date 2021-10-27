class Cliente {
    constructor(nome,email,cpf,saldo){
     this.nome = nome
     this.email = email
     this.cpf = cpf
     this.saldo = saldo
    }
  
    depositar(valor){
        this.saldo += valor
    }
  
    exibirSaldo(){
        console.log(this.saldo)
    }
  }
  
  class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
      super(nome,email,cpf,saldo)
      this.saldoPoupanca = saldoPoupanca
    }
  
    depositarPoupanca(valor){
      this.saldoPoupanca += valor
    }
  }

//cliente
const jeff = new Cliente("Jeff","jeff@email.com","112233665544",100)
const jeff = new ClientePoupanca("Jeff","jeff@email.com","2255887744",100,200)
jeff.exibirSaldo()
console.log(jeff)

jeff.depositar(50)
jeff.depositarPoupanca(50)

console.log(jeff)


















