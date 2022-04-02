// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  if(role === 'ceo'){
    return 'Il salario CEO è 2200€';
  }else if(role === 'manager'){
    return 'Il salario Manager è 1800€';
  }else if(role === 'cto'){
    return 'Il salario CTO è 1500€';
  }else if(role === 'developer'){
    return 'Il salario Developer è 1500€';
  }else{
    return 'Il salario default è 1000€';
  }

}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);