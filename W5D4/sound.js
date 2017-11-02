function soundMaker(sound, times) {

  //closure: scope is available to this method because it is enclosed within
  //sound is 'captured' by the makesound closure
  //notice that by changing sound it will persist
  function makeSound() {
    console.log(`${sound}`);
  }
  for (let i = 0; i < times; i++) {
    makeSound();
  }
}

soundMaker("woof", 6);


function summation(arr) {
  let sum = 1;

  //this is a closure because it gives us access to the variable and lets us change its value
  function summer() {
    for(let i = 0; i < arr.length; i++) {
      sum *= arr[i];
    }
  }

  summer();

  return sum;
}
//ES5 SYNTAX!!!!
console.log(summation([1,2,3,4]))

//callback is a function passed to another function intended to be used at a later time
//used when the result is not immediately available.


let callback = function() {
  console.log("It has been 5 seconds!");
}
let timeToWait = 5000;
// global.setTimeout(callback, timeToWait)

//You can also directly pass in the function anonymously
global.setTimeout(function() {
  console.log("it has been 5 seconds");
}, 5000)



//ES6 syntax
global.setTimeout(() => console.log("it has been 5 seconds"), 5000)
global.setTimeout(() => {
  console.log("it has been 5 seconds")
}, 5000)

















//
