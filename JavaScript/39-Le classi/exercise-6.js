class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  //Creo il costruttore per i parametri di ingresso
  constructor(figure){ 
    this.figure = figure; 
  }
  //Tramite il metodo statico calculate ed usando uno switch controllo se il valore in ingresso è presente
  static calculate(calculater){
  switch(calculater){
    case 
      square: class calcuateSquare extends Square{
        

       }
      
    case
      rectangle: class calcuateRectangle extends Rectangle{
        
     }
     
    case
      circle: class calcuateCircle extends Circle{
        
     }
     
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));