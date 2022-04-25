const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

//const json = JSON.stringify(person);

//Filtraggio oggetto 
let json = JSON.stringify(person,['id','age'],1)


console.log(json); // Should return: { id: 1, age: 25 }