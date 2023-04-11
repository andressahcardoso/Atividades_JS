// Atividades

// 1. Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo e imprime no console a área do retângulo.

function log() {
    const altura = Number(prompt('Informe a altura do retângulo: '))
    const largura = Number(prompt('Informe a largura do retângulo: '))

    console.log('A área do retângulo é igual a ', altura*largura)

}


// 2. Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.

function funcoes1() {
    const anoAtual = Number(prompt("Informe o ano atual: "))
    const anoNascimento = Number(prompt("Informe o ano de seu nascimento: "))

    function idade(anoAtual, anoNascimento) {
        console.log('Você tem ', anoAtual-anoNascimento, ' anos de idade')
    }

    idade(anoAtual, anoNascimento)
}


// 3. Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).

function funcoes2() {
    const peso = Number(prompt("Informe seu peso em Kg: "))
    const alturaP = Number(prompt("Informe sua altura (metros): "))

    function imc(peso, alturaP) {
        console.log('Seu IMC é ', peso/(alturaP*alturaP))
    }

    imc(peso, alturaP)
}


// 4. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.

function funcoes3() {
    const string1 = prompt('Texto 1: ')
    const string2 = prompt('Texto 2: ')

    function bool(string1, string2) {
        let boole = false

        if (string1.length > string2.length) {
            boole = true
            alert('A primeira expressão é maior que a segunda. \n Valor Booleano: ' + boole)
        }

        else if (string1.length = string2.length) {
            boole = true
            alert('As duas expressões tem o mesmo tamanho. \n Valor Booleano: ' + boole)
        }

        else {
            boole = false
            alert('A primeira expressão é menor que a segunda. \n Valor Booleano: ' + boole)
        }
    }

    bool(string1, string2)
}


// 5. Escreva uma função que recebe um array e retorna o último elemento.

function array() {
    const ary = prompt("Informe um Array (separado por virgula)").split(",") 
    alert('O último elemento é ' + ary[(ary.length)-1])
    console.log('O último elemento é ' + ary[(ary.length)-1])
}


// 6. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.

function funcoes4() {
    const string1 = prompt('Texto 1: ')
    const string2 = prompt('Texto 2: ')

    function bool(string1, string2) {
        let boole = false

        if (string1 === string2) {
            boole = true
            alert('As duas expresões são iguais \n Valor Booleano: ' + boole)
        }

        else {
            boole = false
            alert('As expressões são diferentes. \n Valor Booleano: ' + boole)
        }
    }

    bool(string1, string2)
}



// 7. Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

// - a) Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - b) Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - c) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.


function funcoes5() {
    const anoAtual = Number(prompt("Informe o ano atual: "))
    const anoNascimento = Number(prompt("Informe o ano de seu nascimento: "))
    const anoCarteira = Number(prompt("Informe o ano em que sua carteira de identidade foi emitida: "))

    function idade(anoAtual, anoNascimento, anoCarteira) {
        let bool = true

        let idade = (anoAtual-anoNascimento)
        let carteira = (anoAtual-anoCarteira)

        if (idade <= 20 && carteira >= 5) {
            console.log(bool)
        }

        else if (idade > 20 && idade <= 50 & carteira >= 10) {
            console.log(bool)
        }

        else if (idade > 50 && carteira >= 15) {
            console.log(bool)
        }

        else {
            bool = false
            console.log(bool)
        }
    }

    idade(anoAtual, anoNascimento, anoCarteira)
}