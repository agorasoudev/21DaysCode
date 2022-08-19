const previousOperationText = document.querySelector('#previous-operation'); //seleciona os elementos que tem a classe previous-operation
const currentOperationText = document.querySelector('#current-operation'); //seleciona os elementos que tem a classe current-operation
const buttons = document.querySelectorAll('#buttons-container button') //seleciona todos os botões do container buttons-container

class Calculator {
    constructor (previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;

        this.currentOperation = "";
    }

    processOperation(operation) { // Processa a operação
        if(this.currentOperationText.innerText === "" && operation !== "C") { // Verifica se o valor atual está vazio
            if(this.previousOperationText.innerText !== "") { // Mudança de operação
                this.changeOperation(operation);
            }
            return;
        }
        let operationValue
        const previous = +this.previousOperationText.innerText.split(" ")[0]; // Pega o valor do anterior);
        const current = +this.currentOperationText.innerText;

        switch (operation) {
            case '+':
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case '-':
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case '*':
                operationValue = previous * current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case '/':
                operationValue = previous / current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case 'DEL':
                operationValue = previous / current;
                this.processDelOperator();
                break;
            case 'CE':
                operationValue = previous / current;
                this.processClearCurrentOperation();
                break;
            case 'C':
                operationValue = previous / current;
                this.processClearAllOperation();
                break;
            case '=':
                operationValue = previous / current;
                this.processEqualOperator();
                break;
            default:
                return;
        }
    }

    addDigit(digit) { // Adiciona um digito no display da calculadora
        if(digit === "." && this.currentOperationText.innerText.includes(".")) { // Verifica se a operação corrente já tem um ponto
            return;
        }

        this.currentOperation = digit;
        this.updateScreen();
    }

    //Muda os valores do display da calculadora
    updateScreen (operationValue = null, operation = null, current = null, previous = null) {
        console.log(operationValue, operation, current, previous);

        if(operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else { // Se não for nulo, atualiza os valores do display
            if(previous === 0) {
                operationValue = current;
            }

            this.previousOperationText.innerText = `${operationValue} ${operation}`; // Adiciona o valor atual ao anterior
            this.currentOperationText.innerText = ""; // Limpa o valor atual
        }
    }

    changeOperation(operation) {
        const mathOperation = ['+', '-', '*', '/'];

        if(!mathOperation.includes(operation)) {
            return;
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation; // Remove o último caracter da operação anterior e adiciona a operação atual
    }

    processDelOperator() { // deleta o último caracter do display
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1); 
    }

    processClearCurrentOperation() { // Limpa o valor atual
        this.currentOperationText.innerText = "";
    }

    processClearAllOperation() { // Limpa todos os valores
        this.previousOperationText.innerText = "";
        this.currentOperationText.innerText = "";
    }

    processEqualOperator() { // Calcula o resultado da operação
        const operation = previousOperationText.innerText.split(" ")[1]; // Pega a operação
        this.processOperation(operation);
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText; //pega o valor do botão que foi clicado

        if(+value >= 0 || value === '.') { 
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    })
})















// function displaynum(n1){
//     Calculator.display.value = Calculator.display.value + n1;
// }