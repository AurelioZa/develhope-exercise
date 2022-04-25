/*
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}
*/

function sum(num){
  let tot = 0;
  for(let ind of num) tot += ind;
  return tot;
}


const numbers = [1, 2, 3, 4, 5];

//console.log(sum(numbers[0], numbers[1], numbers[2]));
console.log(sum(numbers));