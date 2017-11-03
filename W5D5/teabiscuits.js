const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// reader.close
function a(){
  let first, second;

  reader.question("Would you like some tea?", function(response){
    first = response
    reader.question("Would you like some biscuits?", function(response){
      second = response
      const a = (first === 'yes') ? first = 'do' : first = 'dont';
      const b = (second === 'yes') ? second = 'do' : second = 'dont';
      console.log(`you ${first} want tea, you ${second} want buiscuits`);

      reader.close()
      // return 12;
    })
  })
}
a()
