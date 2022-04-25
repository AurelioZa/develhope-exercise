class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);
// Print developer as json object

let json = JSON.stringify(developer);

//Visualizzo l'oggetto in formato JSON
console.log(json);

//Controllo tipologia dato
console.log(typeof json);