namespace CalculatorHomework {
    angular.module('CalculatorHomework', []);

    class CalculatorController {
        public operationList = [''];
        public index = 0;
        public display = 0;
        public result = 0;

        public numButton(num) {
            this.operationList[this.index] = this.operationList[this.index] + '' + num;
            this.updateDisplay();
            console.log(`Number is ${this.operationList[this.index]}`);
        }

        public operatorButton(operator) {
            this.index++
            this.operationList[this.index] = operator;
            console.log(`Operator is ${this.operationList[this.index]}`);
            this.updateDisplay();

            this.index++
            this.operationList[this.index] = '';
        }

        public updateDisplay() {
            if (display) {
                this.display = display;
            } else {
                this.display = parseFloat(this.operationList[this.index]);
            }
        }

        public calculate() {
            console.log('next test6');
            console.log(this.operationList[0]);
            console.log(this.operationList[1]);
            console.log(this.operationList[2]);

            if (this.operationList[1] == '+') {
                this.result = parseInt(this.operationList[0]) + parseInt(this.operationList[2]);
            } else if (this.operationList[1] == '-') {
                this.result = parseInt(this.operationList[0]) - parseInt(this.operationList[2]);
            } else if (this.operationList[1] == 'x') {
                this.result = parseInt(this.operationList[0]) * parseInt(this.operationList[2]);
            }
            // else if (this.operationList[1] == '/') {
            //    if (operationList[2] == 0) {
            //        this.result = 'To infinity and beyond';
            //    } else {
            //        this.result = parseInt(this.operationList[0]) / parseInt(this.operationList[2]);
            //    }
            //}
            console.log(this.result);
            //this.operationList[this.index] = this.result;
            this.updateDisplay(this.result);
        }
    }
    angular.module('CalculatorHomework').controller('CalculatorController',CalculatorController)
}