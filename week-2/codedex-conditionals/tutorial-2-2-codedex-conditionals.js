console.log("============================================");
console.log("TUTORIAL 2-2: CODEDEX CONDITIONALS");
console.log("Student: Gavin Figueroa");
console.log("Date: 1-23-2026");
console.log("============================================");

console.log("--------------------------------------------");
console.log("EXERCISE 11: COIN FLIP");
console.log("Simulate a coin toss using Math.random()");
console.log("Output \"Heads\" or \"Tails\"");
console.log("--------------------------------------------");

let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}

console.log("--------------------------------------------");
console.log("EXERCISE 12: GOOD MORNING");
console.log("Check if hour < 12");
console.log("If true, print morning greeting with routines");
console.log("--------------------------------------------");

let hour = ("9");

if (hour < 12) {
  console.log("Good morning 🌞")
  console.log("Don't forget to brush your teeth and eat breakfast!")
}

console.log("--------------------------------------------");
console.log("EXERCISE 13: GOOD AFTERNOON");
console.log("Add else clause to Exercise 12");
console.log("If hour < 12: morning greeting");
console.log("Else: afternoon greeting");
console.log("--------------------------------------------");

let hourAfternoon = ("13");

if (hourAfternoon < 12) {
  console.log("Good morning 🌞")
  console.log("Don't forget to brush your teeth and eat breakfast!")
} else{
  console.log("Good afternoon ☁️")
  console.log("Make sure to check your email and drink some water.")
}

console.log("--------------------------------------------");
console.log("EXERCISE 14: pH LEVELS");
console.log("Check if pH is basic, acidic, or neutral");
console.log("Use else if for multiple conditions");
console.log("--------------------------------------------");

let ph = ("5");

if (ph > 7){
  console.log("Basic");
} else if (ph < 7){
  console.log("Acidic");
} else{
  console.log("Neutral");
}

console.log("--------------------------------------------");
console.log("EXERCISE 15: MAGIC 8 BALL");
console.log("Generate random number 0-8");
console.log("Return different responses based on number");
console.log("Format: Question / Magic 8 Ball Answer");
console.log("--------------------------------------------");

let number = Math.floor(Math.random() * 10);
let question = ("Do aliens exist?")

console.log("Question: " + question)
console.log(" ")

if (number === 1){
  console.log("Magic 8 Ball: Yes - definitely.");
} else if (number === 2){
  console.log("Magic 8 Ball: It is decidedly so.");
} else if (number === 3){
  console.log("Magic 8 Ball: Without a doubt.");
} else if (number === 4){
  console.log("Magic 8 Ball: Reply hazy, try again.");
} else if (number === 5){
  console.log("Magic 8 Ball: Ask again later.");
} else if (number === 6){
  console.log("Magic 8 Ball: Better not tell you now.");
} else if (number === 7){
  console.log("Magic 8 Ball: My sources say no.");
} else if (number === 8){
  console.log("Magic 8 Ball: Outlook not so good.")
} else{
  console.log("Magic 8 Ball: Very doubtful.");
}

console.log("--------------------------------------------");
console.log("EXERCISE 16: AIR QUALITY INDEX");
console.log("Check AQI ranges using logical operators");
console.log("0-50: Good, 51-100: Moderate, etc.");
console.log("--------------------------------------------");

let aqi = ('50');

if (aqi > 0 && aqi < 51){
  console.log('Good.');
} else if (aqi > 50 && aqi < 101){
  console.log('Moderate.');
} else if (aqi > 100 && aqi < 151){
  console.log('Unhealthy(Sensitive Groups).');
} else if (aqi > 150 && aqi < 201){
  console.log('Unhealthy.');
} else if (aqi > 200 && aqi < 301){
  console.log('Very Unhealthy.');
} else{
  console.log('Hazardous.');
}

console.log("--------------------------------------------");
console.log("EXERCISE 17: ROCK PAPER SCISSORS");
console.log("Player picks 0, 1, or 2");
console.log("Computer picks random 0-2");
console.log("Determine winner using conditionals");
console.log("--------------------------------------------");

let player = ('0')

let computer = Math.floor(Math.random() * 3);

if (player == 0 && computer == 1){
  console.log("Player picked: Rock");
  console.log(" ");
  console.log("Computer picked: Paper");
  console.log(" ");
  console.log(" ");
  console.log("The computer won!");
} else if (player == 0 && computer == 0){
  console.log("Player picked: Rock");
  console.log(" ");
  console.log("Computer picked: Rock");
  console.log(" ");
  console.log(" ");
  console.log("Tie!");
} else if (player == 0 && computer == 2){
  console.log("Player picked: Rock");
  console.log(" ");
  console.log("Computer picked: Scissors");
  console.log(" ");
  console.log(" ");
  console.log("The player wins!");
} else if (player == 1 && computer == 0){
  console.log("Player picked: Paper");
  console.log(" ");
  console.log("Computer picked: Rock");
  console.log(" ");
  console.log(" ");
  console.log("The player wins!");
} else if (player == 1 && computer == 1){
  console.log("Player picked: Paper");
  console.log(" ");
  console.log("Computer picked: Paper");
  console.log(" ");
  console.log(" ");
  console.log("Tie!");
} else if (player == 1 && computer == 2){
  console.log("Player picked: Paper");
  console.log(" ");
  console.log("Computer picked: Scissors");
  console.log(" ");
  console.log(" ");
  console.log("The computer wins!");
} else if (player == 2 && computer == 0){
  console.log("Player picked: Scissors");
  console.log(" ");
  console.log("Computer picked: Rock");
  console.log(" ");
  console.log(" ");
  console.log("The computer wins!");
} else if (player == 2 && computer == 1){
  console.log("Player picked: Scissors");
  console.log(" ");
  console.log("Computer picked: Paper");
  console.log(" ");
  console.log(" ");
  console.log("The player wins!");
} else if (player == 2 && computer == 2){
  console.log("Player picked: Scissors");
  console.log(" ");
  console.log("Computer picked: Scissors");
  console.log(" ");
  console.log(" ");
  console.log("Tie!");
}