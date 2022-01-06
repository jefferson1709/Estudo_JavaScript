function Cliente(nome,cpf,email,saldo){
    this.nome =nome
    this.cpf=cpf
    this.email =email
    this.saldo=saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
  }
  
  const Jefferson = new Cliente("Jefferson","55588844477711","jefferson@email.com",100)
  
  function ClientePoupanca(nome,cpf,email,saldo,saldoPoup)
  {
      Cliente.call(this,nome,cpf,email,saldo)
      this.saldoPoup = saldoPoup
  }
  
  const jeff = new ClientePoupanca("jeff","55588844477711","jeff@email.com",100,200)
  
  console.log(jeff)
  
  ClientePoupanca.prototype.depositarPoup = function(valor){
      this.saldoPoup += valor
  }
  
  jeff.depositarPoup(30)
  
  console.log(Jefferson.saldoPoup)
  console.log(jeff.saldoPoup)