console.log(`Trabalhando com for`);

                    //1
    const numeros = [100, 200, 300, 400, 500, 600]

            // 2    //6
    for (let i = 0; i < numeros.length; i++){
                // numeros[0]
    console.log(i, numeros[i])
    }

//Media

    //medias 10,6.5,8,7.5

    // let nota1 = 10
    // let nota2 = 6.5
    // let nota3 = 8
    // let nota4 = 7.5
    // 0    1   2   3
    const notas = [10, 6.5, 8, 7.5]

    //let media = (nota1 + nota2 + nota3 + nota4)/4
    let media = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length
    
    console.log(media)

//Media-for

    const notas = [10, 6.5 ,8 ,7.5]

    let somaDasNotas = 0
    
                        //4
    for (let i = 0; i < notas.length; i++){
      somaDasNotas += notas[i];
    }
    
    let media = somaDasNotas/notas.length
    
    console.log(media)

//media-foreach

    const notas = [10, 6.5, 8, 7.5]

    let somaDasNotas = 0

    //callback
    // notas.forEach(nota => {
    //   somaDasNotas += nota
    // })

    notas.forEach(function(nota){
    somaDasNotas += nota
    })

    let media = somaDasNotas/notas.length

    console.log(media)

//media-geral
    const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
    const salaJava = [6, 5, 8, 9, 5, 6]
    const salaPython = [7, 3.5, 8, 9.5]

    function mediaSala(notasDaSala) {
        return notasDaSala.reduce((acum, atual) => atual + acum, 0) / notasDaSala.length
    }

    console.log(`Média da sala JavaScript ${mediaSala(salaJS)}`)
    console.log(`Média da sala Java ${mediaSala(salaJava)}`)
    console.log(`Média da sala Python ${mediaSala(salaPython)}`)

    const notas = [10, 6.5, 8, 7]

    const media = notas.reduce((acum,atual) => atual + acum,0) / notas.length

    console.log(media)

//adicionando-nota
    const notas = [10 ,6 ,8] // 7
    notas.push()
    console.log(notas)

    let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

    console.log(media)

//removendo-nota
    const notas = [10 ,7 ,8, 5, 10]
    notas.pop()
    console.log(notas)

    let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
    console.log(`A média é ${media}`)

// ponto-extra
    const notas = [10, 9, 8, 7, 6]

    const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)

    console.log(notasAtualizadas)

//reprovado
    //0     1        2
    const nomes = ['Ana','Marcos','Maria', 'Mauro']
    const notas = [7, 4.5, 8, 7.5]
    
    //    []
    const reprovados = nomes.filter((_, indice) => notas[indice] < 5)
    
    console.log(`reprovados: ${reprovados}`)

//Atualizando-lista
    //0     //1     2
    const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

    //listaDeChamada.splice(1,2,'Rodrigo')
    listaDeChamada.splice(2,0,'Rodrigo')
    
    console.log(`Lista de chamada: ${listaDeChamada}`)

//juntando -turmas
    const salaDePython = ['Melissa','Helena','Rodrigo']

    const salaDeJavaScript = ['Ju','Leo','Raquel']

    const salasUnificadas = salaDePython.concat(salaDeJavaScript)

    console.log(salasUnificadas)

//dividindo-arrays
    //0       1
    const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

    console.log("tamanho da array:", nomes.length)
                            //0, 10
    const sala1 = nomes.slice(0,nomes.length/2)
                            //10
    const sala2 = nomes.slice(nomes.length/2)
    
    console.log(`Alunos da sala 1: ${sala1}`)
    console.log(`Alunos da sala 2: ${sala2}`)

//lista-duas-dimensoes
    //0
    const alunos = ['João', 'Juliana', 'Caio', 'Ana']

    //0
    const mediasDosAlunos = [10,7,9,6]

    // let listaDeAlunos = [['João', 'Juliana', 'Caio', 'Ana'], [10,7,9,6]]
                               //0     //1
    let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

    console.log(`${listaDeNotasEAlunos[0][0]}, sua media é ${listaDeNotasEAlunos[1][0]}`)

//Map-nomes
    let nomes = ["ana Julia","Caio vinicius","BIA silva"]

    const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

    console.log(nomesAtualizados)

//Callbacks
    const nomes = ["Ana","Ju","Leo","Paula"]

    nomes.forEach(ImprimeNomes)

    function ImprimeNomes(nome){
        console.log(nome)
    }
