document.getElementById('formFolhaPagamento').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const salario = parseFloat(document.getElementById('salario').value);

    let taxaDesconto;
    let valorDesconto;

    
    if (salario <= 1000) {
        taxaDesconto = 8;
    } else if (salario <= 1500) {
        taxaDesconto = 8.5;
    } else {
        taxaDesconto = 9;
    }

    valorDesconto = salario * (taxaDesconto / 100);

    
    document.getElementById('NomedoResultado').textContent = nome;
    document.getElementById('Salario').textContent = salario.toFixed(2);
    document.getElementById('txDesconto').textContent = taxaDesconto.toFixed(1);
    document.getElementById('ResultadodoDesconto').textContent = valorDesconto.toFixed(2);

    
    document.getElementById('resultado').classList.remove('babuino');
});