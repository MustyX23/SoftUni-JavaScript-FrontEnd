function subtract() {
    const firstElement = document.getElementById('firstNumber').value;
    const secondElement = document.getElementById('secondNumber').value;

    document.getElementById('result').textContent = Number(firstElement - secondElement); 
}