const person = {
  firstName : "",
  lastName : "",
  set name(value){ this.firstname = value},
  set surname(value){ this.lastname = value},
  fullName(){ return this.firstname + ' ' + this.lastname }
}

// Costruzione oggetti
let john = Object.create(person);
let simon = Object.create(person);

// Assegnazione valori 
john.name = 'John';
john.surname = 'Doe';
simon.name = 'Simon';
simon.surname = 'Collins';

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins