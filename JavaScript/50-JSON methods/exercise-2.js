class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  static fromJson(person){
    //Converto il JSON in Object Literal
    let object = JSON.parse(person)
    
    //Controllo Oggetto
    console.log(object)
    //Restituisco il valore al costruttore
    return new this(object.id,object.firstName,object.lastName,object.age)
  }

  toJson() {
    return JSON.stringify(this);
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);