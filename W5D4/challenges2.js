// Write a function titleize that takes an array of names and a
// function (callback). titleize should use Array.prototype.map to
//  create a new array full of titleized versions of each name -
//  titleize meaning "Roger" should be made to read "Mx. Roger Jingleheimer
//   Schmidt". Then pass this new array of names to the callback, which should
//    use Array.prototype.forEach to print out each titleized name.
//
// > titleize(["Mary", "Brian", "Leo"], printCallback);
// Mx. Mary Jingleheimer Schmidt
// Mx. Brian Jingleheimer Schmidt
// Mx. Leo Jingleheimer Schmidt
// undefined

function cb(words) {
  words.forEach(function(word) {
    console.log(word);
  })
}

function titleize(names, callBack) {
  let titles = names.map(function(name) {
    return `Mx. ${name} Jingleheimer Schmidt`;
  })
  callBack(titles)
}
// titleize(["Mary", "Brian", "Leo"], cb);

// global.setTimeout(() => {
//   console.log("it has been 5 seconds")
// }, 5000)




// function callback




// First write a constructor function for an elephant. Each elephant shoul
// d have a name, height (in inches), and array of tricks in gerund form (e.g.
//    "painting a picture" rather than "paint a picture").
//
// Next write a few prototype functions that will be shared among all elephants:
//
// Elephant.prototype.trumpet: should print "(name) the elephant goes 'phrRRRRRRRRRRR!!!!!!!'"
// Elephant.prototype.grow: should increase the elephant's height by 12 inches
// Elephant.prototype.addTrick(trick): add a new trick to their existing repertoire
// Elephant.prototype.play: print out a random trick, e.g. "(name) is (trick)!"
// Hint: look up some JS Math methods!
// Make sure to create an elephant and test all of these functions out on them method style!

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes PHHHRrrRRR`);
};
Elephant.prototype.grow = function() {
  this.height += 12;
};
Elephant.prototype.heightGetter = function() {
  console.log(`${this.height} inches`);
}
Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};
Elephant.prototype.randomTrick = function() {
  console.log(this.tricks[Math.floor(Math.random() * this.tricks.length)]);
};
// let ex = new Elephant('bob', 0, []);

// ex.trumpet()
// ex.grow()
// ex.heightGetter()
// ex.addTrick('roll')
// ex.addTrick('jump')
// ex.addTrick('climb')
// ex.addTrick('swim')
// console.log(ex.tricks);
// ex.randomTrick()

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

function paradeHelper(el) {
  console.log(`${el.name} is trotting by!`);
}

herd.forEach(function(el) {
  paradeHelper(el)
})


function dinerBreakfast() {

}












//
