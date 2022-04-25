const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

//const { id, name, surname, old } = person;
const { id: id, firstName: name1, lastName: surname, age: old } = person;
console.log(id, name1, surname, old);