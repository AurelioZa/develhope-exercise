const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

person2.firstName = 'Simon' 

/*A person2 è stato assegnato l'oggetto person1 creando quindi un riferimento a person1. 
Modificando la proprietà di person2 stiamo modificando il riferimento all'oggetto person1 e quindi alla sua proprietà.
*/

console.log(person1);
console.log(person2);