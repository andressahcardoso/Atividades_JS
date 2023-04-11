// Atividade Array - Faça um programa, seguindo os passos:
  
function array() {
    const Tarefas = []
    
    Tarefas.push(String(prompt("Informe a 1° (primeira) tarefa: ")))
    Tarefas.push(String(prompt("Informe a 2° (segunda) tarefa: ")))
    Tarefas.push(String(prompt("Informe a 3° (terceira) tarefa: ")))

    console.log('Os itens da lista são: ' + Tarefas)

    Tarefas.splice(Number(prompt("Digite a posição do elemento que deseja remover: ")-1), 1)  
    console.log('Os itens da lista são: ' + Tarefas)
}



// Atividade Funções 1 - Dados pessoais

function funcoes1() { 
    // const nome = prompt("Informe seu nome: ")
    const nome = "Andressa"

    // const idade = Number(prompt("Informe sua idade: "))
    const idade = 18

    // const endereco = prompt("Informe seu endereço e/ou cidade: ")
    const endereco = "São Leopoldo"

    // const profissao = prompt("Informe sua profissão: ")
    const profissao = "estagiária na SKA - Automação de Engenharias"


    function DatosPessoas (nome, idade, endereco, profissao) {
        let dados = "Meu nome é " + nome + ", tenho " + idade + " anos de idade, moro em " + endereco + " e sou " + profissao + ". "
        console.log(dados)
        alert(dados)
        return dados
    }

    DatosPessoas(nome, idade, endereco, profissao)
}



// Atividade Funções 2 - Soma de dois Valores

function funcoes2() {
    const numero1 = Number(prompt("Digite um valor: "))
    const numero2 = Number(prompt("Digite um segundo valor: "))

    function soma (numero1, numero2) {
        const ValordeSoma = numero1 + numero2
        console.log("O resultado da soma foi de: ", ValordeSoma)
        alert("A soma de " + numero1 + "+" + numero2 + " é igual a: " + ValordeSoma)
        return ValordeSoma
    }

    soma(numero1, numero2)
}



// Atividade Funções 3 - Número Booleano 

function funcoes3() {
    const numero1 = Number(prompt("Digite um valor: "))
    const numero2 = Number(prompt("Digite um segundo valor: "))
    
    function NumeroBooleano (numero1, numero2) {
        let numero = false
        if (numero1 >= numero2) {
            numero = true
            console.log("O 1° (primeiro) número é maior ou igual ao segundo. \n Valor Booleano: " + numero)
            alert("O 1° (primeiro) número é maior ou igual ao segundo. \n Valor Booleano: " + numero)
        } else {
            numero = false
            console.log("O 1° (primeiro) número é menor que o segundo. \n Valor Booleano: " + numero)
            alert("O 1° (primeiro) número é menor que o segundo. \n Valor Booleano: " + numero)
        }
        return numero
    }

    NumeroBooleano(numero1, numero2)
}



// Atividade Funções 4 - Valor Booleano (Par ou Impar)

function funcoes4() {
    const numero1 = Number(prompt("Digite um valor: "))
    
    function ParImpar (numero1) {
        let valor = false
        if (numero1%2 == 0) {
            valor = true
            console.log("O valor informado é par. \n Valor Booleano: " + valor)
            alert("O valor informado é par. \n Valor Booleano: " + valor)
        } else {
            valor = false
            console.log("O valor informado é impar. \n Valor Booleano: " + valor)
            alert("O valor informado é impar. \n Valor Booleano: " + valor)
        }
        return valor
    }

    ParImpar(numero1)
}



// Atividade Funções 5 - Mensagem

function funcoes5() {
   const mensagem = "Olá, tudo bem?"

    function EditMensagem (mensagem) {
        let mensagem2 = "A mensagem: " + mensagem.toUpperCase() + " tem um total de " + mensagem.length + " caracteres. "
        console.log(mensagem2)
        alert(mensagem2)
        return mensagem2
    }

    EditMensagem(mensagem)
}



// Atividade Funções 6 - Operações matemáticas

function funcoes6() {
    const numero1 = Number(prompt("Digite um valor: "))
    const numero2 = Number(prompt("Digite um segundo valor: "))

    function soma (numero1, numero2) {
        const ValordeSoma = numero1 + numero2
        console.log("O resultado da soma foi de: ", ValordeSoma)
        alert("A soma de " + numero1 + "+" + numero2 + " é igual a: " + ValordeSoma)
        return ValordeSoma
    }

    soma(numero1, numero2)


    function subtração (numero1, numero2) {
        const ValordeSubtração = numero1 - numero2
        console.log("O resultado da subtração foi de: ", ValordeSubtração)
        alert("A subtração de " + numero1 + "-" + numero2 + " é igual a: " + ValordeSubtração)
        return ValordeSubtração
    }

    subtração(numero1, numero2)


    function multiplicação (numero1, numero2) {
        const ValordeMult = numero1 * numero2
        console.log("O resultado da multiplicação foi de: ", ValordeMult)
        alert("A multiplicação de " + numero1 + "*" + numero2 + " é igual a: " + ValordeMult)
        return ValordeMult
    }

    multiplicação(numero1, numero2)


    function divisao (numero1, numero2) {
        const ValordeDivisao = numero1 / numero2
        console.log("O resultado da divisão foi de: ", ValordeDivisao)
        alert("A divisão de " + numero1 + "/" + numero2 + " é igual a: " + ValordeDivisao)
        return ValordeDivisao
    }

    divisao(numero1, numero2)
}
