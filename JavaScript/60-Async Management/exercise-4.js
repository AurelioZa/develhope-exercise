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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
function fetchPersonId(id){
  return new Promise((resolve,reject) => {
    if(persons.find((item) => item.id === id)){
      return resolve ('Ritorno la persona')
    }else{
      return reject ('ID Non trovato')
    }
  })
}

function fetchJobId(id){
  return new Promise((resolve, reject) => {
    if(jobs.find((item) => item.id === id)){
      return resolve ('Ritorno il lavoro')
    }else{
      return reject ('ID Non trovato')
    }
  })
}

async function print(id){
  const person = await fetchPersonId(id);
  const job = await fetchJobId(id);
  return console.log(person), console.log(job);
}

print(2)
.catch((err) => console.log(err))