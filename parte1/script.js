let valor1 = parseInt(prompt("Insira o primeiro valor inteiro:"));
let valor2 = parseInt(prompt("Insira o segundo valor inteiro:"));


let diferenca = valor1 - valor2;


let resultado1 = (valor1 * 2) + (valor2 * 3);


let resultado2 = valor1 * valor2;


let valoresOrdenados;
if (valor1 > valor2) {
    valoresOrdenados = valor1 + ", " + valor2;
} else if (valor2 > valor1) {
    valoresOrdenados = valor2 + ", " + valor1;
} else {
    valoresOrdenados = "Os dois valores são iguais: " + valor1 + ", " + valor2;
}


document.getElementById("diferenca").innerText = "A diferença entre as duas variáveis é: " + diferenca;
document.getElementById("r1").innerText = "O dobro da primeira variável mais o triplo da segunda variável é: " + resultado1;
document.getElementById("r2").innerText = "A multiplicação das duas variáveis é: " + resultado2;
document.getElementById("valoresOrdenados").innerText = "Valores do maior para o menor: " + valoresOrdenados;