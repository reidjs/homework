//constructor function
function NBAPlayer(name, team, position) {
  this.name = name;
  this.team = team;
  this.position = position;
  //do not nest functions in here.
}
function Game(score) {
  this.score = score;
}
Game.prototype.basket = function() {
  score += points
}
NBAPlayer.prototype.dunk = function() {
  this.game.basket
};
// var score = 0
game = new Game(0)
let curry = new NBAPlayer('Steph Curry', 'Warriors', 'Pointguard');

curry.dunk;

console.log(game.score)
