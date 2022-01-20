const TURMA = "turmaA";

let db = firebase.firestore();
/*
db.collection(TURMA).add({
    nome: "Jefferson",
    sobrenome: "Santos",
    notas: {nota1: 9.6, nota2: 7.8},
}).then((doc)=>{
    console.log("Documento inserido com sucesso:", doc);
}).catch(err =>{
    console.log(err)
})
*/
db.collection(TURMA).doc("G2sLwye8r6dfHhluEnfr3").update({
    cidades: firebase.firestore.FieldValue.arrayUnion("Vitoria", "Pernambuco"),
    cidades: firebase.firestore.FieldValue.arrayRemove("Vitoria"),
    faltas: firebase.firestore.FieldValue.increment(5),
}).then(()=>{
    console.log("Documento inserido com sucesso");
}).catch(err =>{
    console.log(err);
})

db.collection(TURMA).doc("G2sLwye8r6dfHhluEnfr3").delete().then(()=>{
    console.log("Documento apagado com sucesso");
}).catch(err =>{
    console.log(err);
})
