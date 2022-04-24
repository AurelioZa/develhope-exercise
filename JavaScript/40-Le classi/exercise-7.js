class Person {
  // Creo il costruttore per i parametri di ingresso
  constructor(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //Implemento il getters delle tre proprietà
  get firstName(){
    return this._firstName;
  }
  get lastName(){
    return this._lastName;
  }
  get age(){
    return this._age;
  }
  //Implemento il setter delle tre proprietà
  set firstName(first){ this._firstName = first; }
  
  set lastName(last){ this._lastName = last; }
  
  set age(value){ this._age = value; }

  //Implemento il getter fullname
  get fullName(){
    return this.firstName + this.lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);