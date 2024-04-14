function numeroMaior() {
    event.preventDefault();

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = document.getElementById('resultado1');

    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = "Por favor, insira números válidos!";
    } else if (num1 > num2) {
        result.innerHTML = "O primeiro número é maior.";
    } else if (num1 === 0 || num2 === 0) {
        alert("Não deixe em branco!");
    } else {
        result.innerHTML = "O segundo número é maior.";
    }
}

function positivoNegativo() {
    event.preventDefault();

    let num = parseFloat(document.getElementById('num3').value);
    let result = document.getElementById('resultado2');

    if (isNaN(num)) {
        result.innerHTML = "Por favor, insira um número válido!";
    } else if (num === 0) {
        result.innerHTML = "O número é zero!";
    } else if (num > 0) {
        result.innerHTML = "O número é positivo!";
    } else {
        result.innerHTML = "O número é negativo!";
    }
}

function numeroMaiorTres() {
    event.preventDefault();

    let num1 = parseFloat(document.getElementById('3num1').value);
    let num2 = parseFloat(document.getElementById('3num2').value);
    let num3 = parseFloat(document.getElementById('3num3').value);

    let result = document.getElementById('resultado3');

    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = "Por favor, insira números válidos!";
    } else if (num1 == num2 || num2 == num3 || num3 == num1) {
        alert("Os valores nao podem ser iguais!")
    } else if (num1 < num2 && num3 < num2) {
        result.innerHTML = "O segundo número é maior.";
    } else if (num3 > num2) {
        result.innerHTML = "O terceiro número é maior.";
    } else {
        result.innerHTML = "O primeiro número é maior.";
    }
}

function maiorIgual() {

    event.preventDefault()
    let num1 = parseFloat(document.getElementById('4num1').value);
    let num2 = parseFloat(document.getElementById('4num2').value);
    let result = document.getElementById('resultado4');


    if (num1 == num2) {
        result.innerHTML = "Números iguais!"
    } else if (num1 > num2) {
        result.innerHTML = "O primeiro é maior!"
    } else {
        result.innerHTML = "O segundo é maior!"

    }
}

function lerDezNumeros() {

    let soma = 0;

    for (let i = 0; i < 10; i++) {
        let valor = parseFloat(prompt(`Informe o ${i + 1}º valor:`));

        if (isNaN(valor)) {
            alert("Por favor, insira um valor numérico válido.");
            break;
        }

        soma += valor;
    }

    let media = soma / 10;
    alert(`A média aritmética dos valores informados é: ${media.toFixed(2)}.`);



}

function somaDezNumeros() {
    let soma = 0;

    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt("Digite um número"));

        if (isNaN(numero)) {
            alert("Por favor, insira um número válido.");
            return; // Encerra a função se um número inválido for inserido
        }

        soma += numero;
    }

    alert("A soma dos 10 números é: " + soma);
}

function lerSeisNumeros() {

    event.preventDefault()

    let result = document.getElementById("resultado-numeros")
    let numeros = []
    let soma = 0

    for (let i = 0; i < 6; i++) {
        let numero = parseInt(prompt("Digite um numero"))

        if (soma <= 72) {
            soma += numero
        } else {
            alert("Passou de 72!")
        }

        numeros.push(numero)
    }

    result.innerHTML = `Valor 1: ${numeros[0]}<br />
                        Valor 2: ${numeros[1]}<br />
                        Valor 3: ${numeros[2]}<br />
                        Valor 4: ${numeros[3]}<br />
                        Valor 5: ${numeros[4]}<br />
                        Valor 6: ${numeros[5]}<br />
                        Total: ${soma}<br />`

    // alert(`Valor 1 ${numeros[0]}\n
    // Valor 2: ${numeros[1]}\n
    // Valor 3: ${numeros[2]}\n
    // Valor 4: ${numeros[3]}\n
    // Valor 5: ${numeros[4]}\n
    // Valor 6: ${numeros[5]}\n
    // Total: ${soma}\nNão passou de 72!`)




}

function calculaMedia() {
    event.preventDefault()

    let result = document.querySelector('#resultado7')
    let i = 1
    let nota = 0
    let notas = [] // criei um array

    for (i = 0; i < 4; i++) {
        do {
            nota = parseInt(prompt("Digite a nota"))

        } while (nota <= 0 || nota >= 10)

        notas.push(nota) // aramazeno o valor digitado dentro do array notas criando um novo indice
        media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4 // acesso os valores de cada nota pelo seu indice

        if(media > 5){
            result.innerHTML = `Nota 1: ${notas[0]}<br />
            Nota 2: ${notas[1]}<br />
            Nota 3: ${notas[2]} <br/>
            Media: ${media.toFixed(2)}<br />
            Voce passou no teste :)!<br/>
            Tente novamente!`
        }else{
            result.innerHTML = `Nota 1: ${notas[0]}<br />
            Nota 2: ${notas[1]}<br />
            Nota 3: ${notas[2]} <br/>
            Media: ${media.toFixed(2)}<br />
            Voce não passou! :( <br/>
            Tente novamente!`
        }

    }




}

function votar(){
    event.preventDefault()

    let anoAtual = 2024
    let anoNascimento = document.getElementById("data").value
    let result = document.getElementById('resultado8')

    let idade = anoAtual - anoNascimento
    if(idade < 18){
        result.innerHTML = "Não pode votar!"
    }else{
        result.innerHTML = "Pode votar!"
    }
}

function validaSenha(){
    event.preventDefault()
    let senha = document.getElementById('senha').value
    let result = document.getElementById('resultado9')

    if(senha != 1234){
        result.innerHTML="Acesso negado!"
    }else{
        result.innerHTML="Acesso permitido!"
    }
}


