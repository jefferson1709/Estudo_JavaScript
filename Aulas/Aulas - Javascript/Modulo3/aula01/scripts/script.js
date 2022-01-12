"use strict"

x=3;

function imprimir(){
    console.log(x)
}

imprimir();
//console.log(x)
console.log(window)

function speakGeneric(){
    console.log(this.sound);
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

//dog.speak();
//cat.speak();

let bindedFunction = speakGeneric.bind(cat);
bindedFunction();

let dobro=() => {console.log(this)};

//let dobro = function(){
//    console.log(this)
//}

let numero = {
    x: 8,
    d: dobro
}

dobro = dobro.bind(numero)
numero.d();
//console.log(numero.d());

function ola(){
    console.log("ola");
}
function tchau(){
    console.log("tchau");
}

function saudacao(s, nome){
    s();
    console.log(nome);
}

saudacao(tchau, "Jefferson");

let usuarios = ["Jefferson", "Adriano", "Mauro"];

function inseirUsuario(nome, callback){
    setTimeout(() => {
        usuarios.push(nome);
        callback();
    }, 1000);
}

function listarUsuario(){
    console.log(usuarios);
}

inserirUsuario("Jefferson", listarUsuario);