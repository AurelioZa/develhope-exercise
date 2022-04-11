const person = {
  set firstName(name){ this.firstName = name;  },
  set lastName(surname){ this.lastName = surname;},
  fullName(){ return this.firstName + ' ' + this.lastName }
}

let john = person.firstName = 'Jonh';

console.log(john.fullName()); // John Doe
//console.log(simon.fullName()); // Simon Collins