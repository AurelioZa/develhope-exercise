const person = {
  firstName: 'John',
  lastName: 'Doe'
};

/*
Inseriamo le optional chaining in modo da escludere gli errori di lettura
*/

console.log(person?.address?.city); // Argh! Cannot read property 'city' of undefined
console.log(person?.fullName?.()); // Argh! Cannot read property 'fullName()' of undefined