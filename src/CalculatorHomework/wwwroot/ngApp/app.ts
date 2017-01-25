namespace CalculatorHomework {
    angular.module('CalculatorHomework', []);

    class CalculatorController {
        public operationList = [''];
        public index = 0;
        public display = '';
        public result = '';
        public i = 0;

        public numButton(num) {
            this.operationList[this.index] = this.operationList[this.index] + '' + num;
            this.updateDisplay(this.operationList[this.index]);
            console.log(`Number is ${this.operationList[this.index]}`);
        }

        public operatorButton(operator) {
            this.index++
            this.operationList[this.index] = operator;
            this.updateDisplay(this.operationList[this.index]);
            console.log(`Operator is ${this.operationList[this.index]}`)

            this.index++
            this.operationList[this.index] = '';
        }

        public updateDisplay(display) {
                this.display = display;
        }

        public calculate() {
            if (this.operationList[1] == '+') {
                this.result = (parseInt(this.operationList[0]) + parseInt(this.operationList[2])).toString();
            } else if (this.operationList[1] == '-') {
                this.result = (parseInt(this.operationList[0]) - parseInt(this.operationList[2])).toString();
            } else if (this.operationList[1] == 'x') {
                this.result = (parseInt(this.operationList[0]) * parseInt(this.operationList[2])).toString();
            } else if (this.operationList[1] == '/') {
                if (this.operationList[2] === '0') {
                    this.result = 'To infinity and beyond';
                } else {
                    this.result = (parseInt(this.operationList[0]) / parseInt(this.operationList[2])).toString();
                }
            }
            console.log(`Result is ${this.result}`);
            this.updateDisplay(this.result);
            this.operationList[0] = this.result;
            this.index = 0;
        }

        public clearScreen() {
            for (this.i = 0; this.i <= 2; this.i++) {
                this.operationList[this.i] = '';
                this.updateDisplay('');
            }
            console.log(`Clear`);
        }

    }
    angular.module('CalculatorHomework').controller('CalculatorController', CalculatorController);
}