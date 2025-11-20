function subtract() {
    firstNum=  Number ( document.querySelector('#firstNumber').value);
    secondNum= Number (document.querySelector('#secondNumber').value);
    const result=firstNum-secondNum;
    document.querySelector('#result').textContent=result.toFixed(2);
}