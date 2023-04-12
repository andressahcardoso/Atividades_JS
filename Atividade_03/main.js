// Objeto

const desenvolvedora = {
    name: 'Andressa',
    idade: 18,
    email: 'andressahenselcardoso@gmail.com'
}



// Notação de ponto
const nomeDev = desenvolvedora.name
console.log(nomeDev)


// Notação de Colchetes
const emailDev = desenvolvedora['email']
console.log(emailDev)


// Treinando

const Filme = {
    titulo: 'A FANTÁSTICA FÁBRICA DE CHOCOLATE',
    tituloOriginal: 'Charlie and the Chocolate Factory',
    anoLancamento: 2005,
    genero: 'Comédia',
    elenco: ['Brigitte Millar', 'Johnny Depp', 'Freddie Highmore'],
    status: 'Assistido'
}


// Notação de ponto
const title = Filme.titulo
console.log(title)

const Originaltitle = Filme.tituloOriginal
console.log(Originaltitle)

const ano = Filme.anoLancamento
console.log(ano)


// Notação de Colchetes
const ger = Filme['genero']
console.log(ger)

const elen = Filme['elenco']
console.log(elen)

const sta = Filme['status']
console.log(sta)



const person = {
    Nome: 'Andressa',
    Idade: 18,
    GeneroMusical: 'Pop'
}

console.log('O nome da pessoa é ', person.Nome, ', ela tem ', person.Idade, ' anos e gosta muito de música ',person.GeneroMusical + '.')


// Objeto dentro de objeto

const MaedePet = {
    nome: 'Maria',
    pet: {
        nome: 'Alberto',
        raca: 'Salsicha',
        idade: 2
    }
}

const nomePet = MaedePet.pet.nome
console.log(nomePet)