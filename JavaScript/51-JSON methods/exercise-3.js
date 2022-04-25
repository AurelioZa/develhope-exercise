const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

//const person2 = { ...person1 };

//Converto l'oggetto in JSON
let json = JSON.stringify(person1);

//Assegno a person2 il JSON convertito in oggetto
person2 = JSON.parse(json);


person2.address.city = 'Milan';

console.log(person1);
console.log(person2);