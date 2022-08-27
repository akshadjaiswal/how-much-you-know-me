var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("what's your name?")

console.log("-------------------")
console.log("Welcome " + userName + "  DO YOU KNOW Akshad ? ");
console.log("-------------------")

//play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right !")
    score = score + 1;


  } else {
    console.log("wrong !")



  }
  console.log("current score : ", score)
  console.log("-------------------")
}


//array of the objects
var questions = [{
  question: "Where do i live ?",
  answer: "Amravati"
},
{
  question: "My favourite  anime character would be ?",
  answer: "Naruto"
},
{
  question: "Where do i study?",
  answer: "Pune"
},
{
  question: "What is the name of my sister ?",
  answer: "Akshita"
},
{
  question: "What is my nick name ?",
  answer: "Mint"
}
]

//loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

//final score
console.log("YAYY! You Score: ", score)