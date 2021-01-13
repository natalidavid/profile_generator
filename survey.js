const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let ans1 = "";
let ans2 = "";
let ans3 = "";
let ans4 = "";
let ans5 = "";
let ans6 = "";
let ans7 = "";
rl.question(`What\'s your name? Nicknames are also acceptable :) `, (answer) => {
  ans1 = answer;
  rl.question(`\nHi ${ans1}. What\'s an activity you like doing? `, (answer) => {
    ans2 = answer;
    rl.question(`\nWhat do you listen to while ${ans2}? `, (answer) => {
      ans3 = answer;
      rl.question(`\nWhich meal is you favourite (eg: dinner, brunch, etc.)? `, (answer) => {
        ans4 = answer;
        rl.question(`\nWhat\'s your favourite thing to eat for ${ans4}? `, (answer) => {
          ans5 = answer;
          rl.question(`\nWhich sport is your absolute favourite? `, (answer) => {
            ans6 = answer;
            rl.question(`\nWhat is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
              ans7 = answer;
              console.log(`\nThank you for your valuable feedback, ${ans1}! Here is your profile summary: \n${ans1} loves listening to ${ans3} while ${ans2}, eating ${ans5} for ${ans4}, and prefers ${ans6} over any other sport. ${ans7} is their superpower.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
