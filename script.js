function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    let result = document.getElementById('result').value;
    if (result === '' || isNaN(result.slice(-1))) {
        return;
    }
    document.getElementById('result').value += operator;
}

function calculateResult() {
    let result = document.getElementById('result').value;
    if (result === '') {
        return;
    }
    try {
        document.getElementById('result').value = eval(result);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
