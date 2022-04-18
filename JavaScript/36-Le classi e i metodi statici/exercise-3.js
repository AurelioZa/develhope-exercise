class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  static fromObject(obj){ //dichiaro un metodo statico con parametro l'oggetto obj
    return new this(obj.firstName,obj.lastName) //ritorno al costruttore (invocato dall'instanziamento della classe) i valori dell'oggetto obj firsName e lastName
  }
}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
};

const person = Person.fromObject(obj);
console.log(`${person.firstName} ${person.lastName}`);