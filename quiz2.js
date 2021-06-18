var readline = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var name = readline.question(chalk.rgb(30,144,255)("Enter your name: "));
console.log("\n");
console.log(chalk.rgb(30,144,255)("Welcome! "+name + " to Urmil's Harry Potter quiz ━☆ﾟ"));
console.log("\n");

//instructions for quiz

var instruct = {
  a: "1.You have 5 questions based on Harry Potter Movie series",
  b: "2.You will be rewarded 1 point for one correct answer",
  c:  "3.No deduction for incorrect answer"
}

//printing out instructions
console.log(chalk.bgRedBright("General Instructions are:"));
console.log("\n");
console.log(chalk.bgRedBright(instruct.a));
console.log(chalk.bgRedBright(instruct.b));
console.log(chalk.bgRedBright(instruct.c));
console.log("\n");

var questionBank = [ {
  question: "1. Harry has a scar on his forehead. What shape is it?",
  a: "Like a shining star",
  b: "Like an egg",
  c: "Like a lightning bolt",
  answer: "c",
},
{
 question : "2. From which platform at Kings Cross does the Hogwarts Express train depart?",
  a: "Gringotts5",
  b: "Nine and three-quarters",
  c: "wand",
  answer: "b",
},
{question: "3. How do the Dursleys say that Harrys parents died? ",
  a: "In a car crash",
  b: "In an aeroplane crash",
  c: "By Cancer",
  answer: "a",
},
{
  question: "4. Who were Harry's parents?",
  a: "Henry and Maggie Potter",
  b: "James and Lily Potter",
  c: "William and Elizabeth Potter",
  answer: "b",
},
{
question : "5. What does Hagrid name his baby dragon? ",
  a : "Hedwig",
  b : "Baby dragon",
  c : "Norbert",
  answer : "c"
}]

for(var i =0; i<questionBank.length; i++)
{
  var currentQuestion = questionBank[i];
  console.log(chalk.greenBright(currentQuestion.question));
  console.log(chalk.cyan("(a)"+ currentQuestion.a));
  console.log(chalk.cyan("(b)"+ currentQuestion.b));
  console.log(chalk.cyan("(c)"+ currentQuestion.c)); 

  var result = readline.question(chalk.rgb(255,215,0)("Your answer: "));

  if(result == currentQuestion.answer)
  {
    console.log(chalk.rgb(238,130,238)("Correct answer!"));
    score=score+1;
    console.log(chalk.rgb(238,130,238)(("Current score: "), score));
  }
  else if(!(result=='a'||result=='b'||result=='c'))
  {
    console.log("Invalid Option!");
    console.log("Current score: ", score);
  }
  else{
    console.log("Incorrect answer!");
    console.log("Current score: ", score);
  }
  console.log("\n");
}

console.log(chalk.rgb(220,20,60)("Yay! You scored: ",score));