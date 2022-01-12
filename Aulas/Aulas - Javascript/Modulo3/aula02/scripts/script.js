let usuarios = ["Jefferson", "Adriano", "Mauro"];

function inseirUsuario(nome){
    let promise = new Promise(function (resolve, reject){
        setTimeout(() => {
            usuarios.push(nome);
            let error = true;

            if(!error){
                resolve();
            }else{
                reject({msg: "Erro de qualquer coisa"})
            }
        },1000);
    })
    return promise;
}

function listarUsuario(){
    console.log(usuarios);
}

inserirUsuario("Jefferson").then(listarUsuarios).catch((error) => {console.log(error)});

async function executar(){
    await inserirUsuario("jefferson");
    listarUsuario();
}
executar();