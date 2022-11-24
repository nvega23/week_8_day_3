const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// function callback(){
//     return parseInt(input)
// }

function addNumbers(sum, numsLeft, callback){
    // const reader = readline.createInterface
    if (numsLeft > 0){
        reader.question('Please type a number:', function(){ return parseInt
        (input)});
        sum += 1
        console.log(sum)
    }
    //     reader.question('What do you REALLY think of JavaScript? ', response => {
    //         console.log(`You said: ${response}. Thank you for your honesty.`);
    //         reader.close();
    //     });
    //     // rl.close(); // Here it would colse after the first user input
    // });
}

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    rl.on('line', (line) => {
      let num = parseInt(line)
      sum += num;
      console.log(sum);
      addNumbers(sum, --numsLeft, completionCallback);
    })
  } else {
    completionCallback(sum);
    rl.close();
  }
}

