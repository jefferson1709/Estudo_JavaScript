let url= "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"

function converter(){
    let input = document.getElementById("valor");
    let valor = input.value;

    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        let rate = data.rates.BRL;

        let resultado = `${valor} dolares = ${rate * valor} em reais`
        document.getElementById("resultado").innerHTML= resultado;
    })
}

let nome = "";

if(nome == ""){
    throw "o nome nao pode ser vazio";
}
try{
    console.log(nome);
} catch(err){
    console.log("Houve um erro", err);
}
console.log("Boa noite");