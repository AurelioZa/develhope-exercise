function calculate(number) {
  return total = { 
    add(){ return '$this.number'},
    multiply(){ return $this.total * number},
    sub(){ return $this.total - number},
    divide(){ return $this.total / number},
    printResult(){ console.log(this.total)}
  }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7