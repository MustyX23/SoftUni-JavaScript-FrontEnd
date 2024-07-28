function calc() {
    const firstNumber = document.getElementById('num1').value;
    const secondNumber = document.getElementById('num2').value;

    const result = document.getElementById('sum');
    
    result.value = Number(firstNumber) + Number(secondNumber);
}
