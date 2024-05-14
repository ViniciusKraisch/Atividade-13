document.getElementById('formFolhaPagamento').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const salario = parseFloat(document.getElementById('salario').value);

    
    const taxaINSS = 0.08;
    const inss = salario * taxaINSS;

    
    const salarioLiquido = salario - inss;

    
    document.getElementById('ResultadoNome').textContent = nome;
    document.getElementById('ResultadodoSalario').textContent = salario.toFixed(2);
    document.getElementById('ResultadodoINSS').textContent = inss.toFixed(2);
    document.getElementById('ResultadoLiquido').textContent = salarioLiquido.toFixed(2);

    
    document.getElementById('resultado').classList.remove('gorila');
});