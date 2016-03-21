//welcome statment and ask for name.
var firstName = prompt('What is your name?');
alert('Hello, ' + firstName + '. My name is Claire Gatenby, welcome to my "About Me" page. Please continue for a quiz to learn more about who I am.');
console.log('First name: ' + firstName);

//initialise the score
var questionArray = ['Firstly, was I born in the USA? Yes or No?', 'Do I have a pet cat? Yes or No?', 'Now you know I am from Australia, do you think I can surf?', 'Apart from Australia and the USA, do you think I have lived in any other countries?', 'I love Japanese food, more than just sushi. I could eat good ramen for the rest of my life. Do you agree with me?'];;
var answerArray = [];
var correctAnswerArray = [];

//first question
var pTagOne = document.getElementById('ans-one');
function birthPlaceQ() {
  var birthPlace = prompt(questionArray[0]);
  console.log('Q1. Birth place: ' + birthPlace);
  if (birthPlace.toLowerCase() === 'yes' || birthPlace.toLowerCase() === 'y') {
    pTagOne.textContent = 'I\'m sorry that wasn\'t right. I was born in Canberra, Australia.';
  } else if (birthPlace.toLowerCase() === 'no' || birthPlace.toLowerCase() === 'n') {
    pTagOne.textContent = 'Correct! I was born in Canberra, Australia.';
    //userScore ++;
    answerArray.push(birthPlace.toLowerCase());
    console.log(answerArray);
  } else {
    alert('That was an invalid response.');
  }
}
birthPlaceQ();

//second question
var pTagTwo = document.getElementById('ans-two');
function petCatQ() {
  var petCat = prompt(questionArray[1]);
  console.log('Q2. Pet cat: ' + petCat);
  if (petCat.toLowerCase() === 'yes' || petCat.toLowerCase() === 'y') {
    pTagTwo.textContent = 'Technically incorrect! I do have a cat that I am fostering for the Seattle Animal Shelter.';
  } else if (petCat.toLowerCase() === 'no' || petCat.toLowerCase() === 'n') {
    pTagTwo.textContent = 'Technically Correct! The cat I have belongs to the Seattle Animal Shelter and I am fostering it until it can be adopted.';
    //userScore ++;
    answerArray.push(petCat.toLowerCase());
    console.log(answerArray);
  } else {
    alert('That was an invalid response.');
  }
}
petCatQ();

//third question
var pTagThree = document.getElementById('ans-three');
function hangTenQ(){
  var hangTen = prompt(questionArray[2]);
  console.log('Q3. Surfing ability: ' + hangTen);
  if (hangTen.toLowerCase() === 'yes' || hangTen.toLowerCase() === 'y') {
    pTagThree.textContent = 'I\'m sorry, incorrect. I grew up in Canberra which is a 2.5 hour drive from the nearest beach. Instead, I learnt how to ski when I was younger.';
  } else if (hangTen.toLowerCase() === 'no' || hangTen.toLowerCase() === 'n'){
    pTagThree.textContent = 'Correct! I grew up in Canberra which is a 2.5 hour drive from the nearest beach. Instead, I learnt how to ski when I was younger.';
    //userScore ++;
    answerArray.push(hangTen.toLowerCase());
    console.log(answerArray);
  } else {
    alert('That was an invalid response.');
  }
}
hangTenQ();

//forth question
var pTagFour = document.getElementById('ans-four');
function homeCountriesQ(){
  var homeCountries = prompt(questionArray[3]);
  console.log('Q4. Countries lived: ' + homeCountries);
  if (homeCountries.toLowerCase() === 'yes' || homeCountries.toLowerCase() === 'y') {
    pTagFour.textContent = 'Correct, I lived in London for 12 months between finishing high school and starting university.';
    //userScore ++;
    answerArray.push(homeCountries.toLowerCase());
    console.log(answerArray);
  } else if (homeCountries.toLowerCase() === 'no' || homeCountries.toLowerCase() === 'n') {
    pTagFour.textContent = 'Sorry, that\'s incorrect. I lived in London for 12 months between finishing high school and starting university.';
  } else {
    alert('That was an invalid response.');
  }
}
homeCountriesQ();

//fifth and secret question
var pTagFive = document.getElementById('ans-five');
function japaneseFoodQ(){
  var japaneseFood = prompt(questionArray[4]);
  console.log('Q5. Japanese food: ' + japaneseFood);
  if (japaneseFood.toLowerCase() === 'yes' || japaneseFood.toLowerCase() === 'y') {
    pTagFive.textContent = 'Nice! You should go to Japan, if you haven\'t already, and have the food there. It blew my mind!';
    //userScore ++;
    answerArray.push(japaneseFood.toLowerCase());
    console.log(answerArray);
  } else if (japaneseFood.toLowerCase() === 'no' || japaneseFood.toLowerCase() === 'n'){
    var secretQuestion = prompt('Oh that\'s a shame. What is your favourite food?');
    pTagFive.textContent = 'That sounds delicious!';
    console.log('Q6. Secret Question: ' + secretQuestion);
  } else {
    alert('That was an invalid response.');
  }
}
japaneseFoodQ();

//score reveal
alert('Congratulations ' + firstName + '! You have finished the quiz. Your score for the quiz was ' + answerArray.length + ' out of 5.');

//Question 6 - number guessing game
function numberGuessQ(){
  var numberGuess = parseInt(prompt('Try guess my favourite number.'));
  console.log('input number: ' + numberGuess);
  var numberTries = 1;

  while (numberTries < 4 && numberGuess !== 13) {
    if (isNaN(numberGuess)) {
      numberGuess = parseInt(prompt('That is an invalid response, try guess again.'));
    } else if (numberGuess < 13) {
      numberGuess = parseInt(prompt('That is too low. Guess again.'));
    } else if (numberGuess > 13) {
      numberGuess = parseInt(prompt('That is too high. Guess again.'));
    } else {
      prompt('Congratulations, you got it right!');
    }
    console.log('input number: ' + numberGuess);
    numberTries ++;
    console.log('number of tries: ' + numberTries);
  }
}
numberGuessQ();

/*// Question 7 bonus adding list of users favourite games
function favoriteGameQ(){
  var favoriteGame = [];
  var gameList = 1;
  while (favoriteGame.length < 5) {
    favoriteGame.push(prompt('What is your number ' + gameList + ' favorite game?'));
    gameList ++;
    console.log('favorite game: ' + favoriteGame);
  }
}
favoriteGameQ();

//Attempt at stretch goal
/*var questions = ['Firstly, was I born in the USA? Yes or No?', 'Do I have a pet cat? Yes or No?', 'Now you know I am from Australia, do you think I can surf?', 'Apart from Australia and the USA, do you think I have lived in any other countries?', 'I love Japanese food, more than just sushi. I could eat good ramen for the rest of my life. Do you agree with me?'];
var numberOfQuestions = questions.length;
var correctAnsWord = ['no', 'no', 'no', 'yes', 'yes'];
var correctAnsLetter = ['n','n','n','y','y'];
var incorrectAnsWord = ['yes','yes','yes','no','no'];
var correctResponse = ['Correct! I was born in Canberra, Australia.', 'Technically correct! The cat I have belongs to the Seattle Animal Shelter and I am fostering it until it can be adopted.','Correct! I grew up in Canberra which is a 2.5 hour drive from the nearest beach. Instead, I learnt how to ski when I was younger.','Correct, I lived in London for 12 months between finishing high school and starting university.','Nice! You should go to Japan, if you haven\'t already, and have the food there. It blew my mind!' ];
var incorrectResponse = ['I\'m sorry that wasn\'t right. I was born in Canberra, Australia.', 'Technically incorrect! I do have a cat that I am fostering for the Seattle Animal Shelter.','I\'m sorry, incorrect. I grew up in Canberra which is a 2.5 hour drive from the nearest beach. Instead, I learnt how to ski when I was younger.','Sorry, that\'s incorrect. I lived in London for 12 months between finishing high school and starting university.', 'Oh that\'s a shame. What is your favourite food?'];

for (var i = 0; i < numberOfQuestions; i++) {
  var userAnswer = prompt(questions[i]).toLowerCase();
  console.log('user answer: ' + userAnswer);
  console.log('i: ' + i);
  if (userAnswer !== 'yes' && userAnswer !== 'no' && userAnswer !== 'n' && userAnswer !== 'y') {
    alert('That was an invalid response.');
  } else if (userAnswer === correctAnsWord[i] || userAnswer === correctAnsLetter[i]) {
    alert(correctResponse[i]);
    userScore ++;
    console.log('user score: ' + userScore);
  } else if (i === 4) {
    prompt(incorrectResponse[i]);
  } else {
    alert(incorrectResponse[i]);
  }
}*/
