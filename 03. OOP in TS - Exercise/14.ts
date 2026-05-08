type AdvancedOperation = "power" | "log";
type BasicOperation = "add" | "subtract" | "multiply" | "divide";

class Calculator {

  calculate(operation: AdvancedOperation, a: number, b: number): number;
  calculate(operation: BasicOperation, a: number, b: number): number;
  calculate(operation: BasicOperation, a: number, b: number, c: number): number;
  calculate(operation: BasicOperation, a: number, b: number, c: number, d: number): number;

  calculate(operation: AdvancedOperation | BasicOperation, ...numbers: number[]): number {

    switch (operation) {
        
      case "power":
        return Math.pow(numbers[0], numbers[1]);

      case "log":
        return Math.log(numbers[0]) / Math.log(numbers[1]);

      case "add":
        return numbers.reduce((sum, num) => sum + num, 0);

      case "subtract":
        return numbers.slice(1).reduce((result, num) => result - num, numbers[0]);

      case "multiply":
        return numbers.reduce((result, num) => result * num, 1);

      case "divide":
        return numbers.slice(1).reduce((result, num) => result / num, numbers[0]);
    }
  }
}

const calc = new Calculator();

console.log(calc.calculate("power", 2, 3));
console.log(calc.calculate("power", 4, 1 / 2));
console.log(calc.calculate("log", 8, 2));
console.log(calc.calculate("add", 10, 5));
console.log(calc.calculate("add", 10, 5, 3));
console.log(calc.calculate("subtract", 10, 5));
console.log(calc.calculate("multiply", 2, 3, 4));
console.log(calc.calculate("divide", 100, 5, 2, 2));