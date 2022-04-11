const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.values
let i = 0;
for(let key in person){
console.log(Object.values(person)[i]);
i++;
}