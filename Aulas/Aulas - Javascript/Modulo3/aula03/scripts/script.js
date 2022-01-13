function novoAluno(nome,idade){
    return{nome, idade}
}

let alunos = [
    novoAluno("Mario",23),
    novoAluno("Jose",45),
    novoAluno("Marcia",29),
    novoAluno("Joao",35),
]

/*
for(let aluno of alunos){
    if(aluno.idade < 30){
        console.log(aluno.nome)
    }
}
*/

function temMenosde30(alunos){
    return alunos.idade < 30
}
function temMaisde30(alunos){
    return alunos.idade > 30
}

/*
function filtro(callback){
    let alunosFiltrados=[];
    for (let aluno of this){
        if (callback(aluno)){
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados;
}
alunos.filtro = filtro
console.log(alunos.filtro(alunosComMenosde30))
*/
let alunosComMenosde30 = alunos.filter(temMenosde30)
console.log(alunosComMenosde30)

function alunoDaquiA5Anos(aluno){
    aluno.idade += 5;
    return aluno;
}

console.log(alunos.map(alunoDaquiA5Anos));

let alunoA = { nome: "Jefferson", idade: 28 };
let alunoB = {...alunoA }
alunoB.idade = 25;

var pessoa = {
    nome: "Jefferson Santos",
    idade: 28,
}
var contato = {
    telefone: 999999999,
    email: "Teste@teste.com",
}

var copia= {...pessoa, ...contato}
copia.idade=29;

console.log(pessoa);
console.log(copia);


var notas_turma1 = [10, 8, 4, 3];
var notas_turma2 = [4, 5, 4, 6];

var todas_notas = [...notas_turma1, ...notas_turma2];

console.log(todas_notas);

var aluno = {
    matricula: 1234,
    nome: "Marcos",
    telefone: 987654432,
    cidade: "São paulo"
}
var aluno1 = {
    matricula: 1235,
    nome: "joao",
    telefone: 987654435,
    cidade: "São paulo"
}
var aluno = {
    matricula: 1236,
    nome: "jorge",
    telefone: 987654439,
    cidade: "São paulo"
}

var alunos=[aluno, aluno1, aluno2]
var [marcos, ...outros] = alunos
console.log(marcos)
console.log(outros)

function idadeDaTurma(total, aluno){
    return total + aluno.idade;
}

console.log(alunos.reduce(idadeDaTurma,0));
