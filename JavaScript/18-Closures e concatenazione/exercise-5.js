function memoize(fn) {
  let cache = {};
  if(fn in cache){
    return 'Fetching from cache for' + fn
  }else{
    //cache = new Object({x: fn});
    //console.log(fn)
    //console.log(cache)
    return 'Calculating result for' + (fn)
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

let calcfactorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(5));
console.log(factorial(0));