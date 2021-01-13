const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ['What\'s your name? Nicknames are also acceptable :)',
'What\'s an activity you like doing?',
'What do you listen to while doing that?',
'Which meal is your favourite (eg: dinner, brunch, etc.)',
'What\'s your favourite thing to eat for that meal?',
'Which sport is your absolute favourite?',
'What is your superpower? In a few words, tell us what you are amazing at!'];


let answers = [];
const survey = function(questionNumber, questions){
  if (questionNumber !== questions.length){
    rl.question(questions[questionNumber], (answer) => {
      answers.push(answer);
      survey((questionNumber + 1), questions);
    });
  } else {
    console.log(answers);
    rl.close();
  }
}

survey(0,questions);