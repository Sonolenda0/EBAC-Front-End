document.getElementById('form-ab').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const numberA = parseFloat(document.getElementById('numberA').value);
    const numberB = parseFloat(document.getElementById('numberB').value);
    const resultElement = document.getElementById('result');

    if (isNaN(numberA) || isNaN(numberB)) {
        resultElement.innerText = 'Por favor, preencha ambos os campos com números válidos.';
        resultElement.className = 'result-negative';
    } else if (numberB <= numberA) {
        resultElement.innerText = 'O Número B deve ser maior que o Número A.';
        resultElement.className = 'result-negative';
    } else {
        resultElement.innerText = 'O Número B é maior do que o Número A.';
        resultElement.className = 'result-positive';
    }
});
