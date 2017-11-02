//verb adj noun interpolates into we shall verb the adj noun

function madlib(verb, adj, noun) {
  return `we shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`;
}

console.log(madlib('kill', 'smelly', 'chicken'));

function isSubstring(searchString, subString) {
  for(let i = 0; i < searchString.length - subString.length; i+=1) {
    if (searchString.slice(i, i+subString.length) == subString)
      return true;
  }
  return false;
}
console.log(isSubstring("time to program", "time"));
console.log(isSubstring("Jump for joy", "joys"));

//take array and return new array of every num divis by 3 and 5 but not both
function fizzbuzz(arr) {
  result = []
  for(let i = 0; i < arr.length; i++) {
    if ((arr[i] % 3 == 0) ^ (arr[i] % 5 == 0)) {
      result.push(arr[i])
    }
  }
  return result
}
console.log(fizzbuzz([3, 5, 15, 9]))

function isPrime(n) {
  for(let i = 2; i < n; i++) {
    if (n % i == 0)
      return false
  }
  return true
}

console.log(isPrime(3));
console.log(isPrime(9));
console.log(isPrime(10));
console.log(isPrime(13));

function sumOfNPrimes(n) {
  let i = 2;
  let sum = 0;
  let primes = 0
  while (primes < n) {
    if (isPrime(i)) {
      sum += i
      primes++;
    }
    i++;
  }
  return sum
}

console.log(sumOfNPrimes(3));


//
