const cliente = {
    nome:"Jefferson",
    idade:29,
    cpf:"12345678999",
    email:"Jeff@teste.com",
    saldo:1000,
    depositar:function(valor){
      this.saldo += valor
    }
  }

//print-infos
    console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
    console.log(cliente.cpf.substring(0,3))

//Acessar-lista
                    //0     //1
    const chaves = ["nome","idade","cpf","email"]

    // console.log(cliente[chaves[0]])
    chaves.forEach(info => console.log(cliente[info]))

    console.log(cliente["conta"])

//adicionando-campo
    console.log(cliente);

    cliente.fone ="(99)9999-9999"
    console.log(cliente);

    cliente.fone ="(99)99999-9999"
    console.log(cliente)

//Acessar-telefone
    cliente.fones.forEach(fone => console.log(fone))

//compondo-objetos
    cliente.dependentes = {
        nome:"Jose",
        parentesco:"pai",
        dataNasc:"16/09/1964"
    }
    console.log(cliente)

    cliente.dependentes.nome = "Jose Raimundo"
    console.log(cliente)

//lista-dependentes

    cliente.dependentes.push({
        nome:"geyciane",
        parentesco:"irma",
        dataNasc:"01/03/1995"
    })

    // console.log(cliente)

    const irmaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="01/03/1995")

    console.log(irmaMaisNova)
    console.log(irmaMaisNova[0].nome)


//fazendo-depositos

    console.log(cliente.saldo)
    cliente.depositar(30)
    console.log(cliente.saldo)

//puxando-relatorio
    let relatorio="";

    for ( let info in cliente){
        if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
            continue
        }else{
            relatorio += `
            ${info} ==> ${cliente[info]}
            `
        }    
    }
    console.log(relatorio)


//oferta-seguro
    function oferecerSeguro(obj){
        const propsClientes = Object.keys(obj);
        if(propsClientes.includes("dependentes"))
        {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
        }
    }
    console.log(Object.values(cliente))
    console.log(Object.entries(cliente))
    oferecerSeguro(cliente)

//objetos
    const listaCPFs = ["12365242625","9242624265","9352524652"]

    // const cliente = ["nome","jeff","idade",29]

    const cliente1 = {
        nome:"jeff",
        idade:29,
        cpf:"12543652266",
        email:"jeff@email.com"
    }


//lista-unica
    const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
    console.table(listaDependentes)












