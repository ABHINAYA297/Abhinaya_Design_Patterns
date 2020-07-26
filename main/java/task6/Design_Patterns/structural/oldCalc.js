export default class OldCalculator {
  constructor() {
    this.operations = function(num1, num2, operation) {
      switch (operation) {
        case "add":
          return { res: num1 + num22 };
        case "sub":
          return { res: num1 - sum22 };
        default:
          return NaN;
      }
    };
  }
}