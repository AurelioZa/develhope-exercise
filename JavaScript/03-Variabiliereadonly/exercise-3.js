const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  const addname = students.push(student) // è possibile variare il contenuto perché in javascript non viene garantito agli oggetti la non modificabilità della stuttura e della sua proprietà.
}

addStudent('Marco');
console.log(students);