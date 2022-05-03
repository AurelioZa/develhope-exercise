const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      
      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

// core here
const myPromise = fetchPersonById(2);

myPromise
.then((data) => { return objectData = JSON.parse(data);})
.then((objectData) => { console.log(objectData);})
.catch((data) => { console.log(data)})

/* 
Avremmo potuto tranquillamente usare una sola promise
.then((data) => { console.log(JSON.parse(data))})
*/
