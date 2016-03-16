var firstName = prompt('What is your name');
alert('Hello, ' + firstName + ' . My name is Claire Gatenby, welcome to my "About Me" page. Please continue for a quiz to learn some more about who I am.');
console.log('First name: ' + firstName);

var birthPlace = prompt('Firstly, Was I born in the USA? Yes or No?');
console.log('Birth place: ' + birthPlace);
if (birthPlace.toLowerCase() === 'yes') {
  alert('I\'m sorry that wasn\'t right. I was born in Canberra, Australia.');
} else {
  alert('Correct! I was born in Canberra, Australia');
}

var petCat = prompt('Do I have a pet Cat? Yes or No?');
console.log('Pet cat: ' + petCat);
if (petCat.toLowerCase() === 'yes') {
  alert('Correct! I do have a Cat that I am fostering for the Seattle Animal Shelter.');
} else {
  alert('Technically correct! The cat I have belongs to the Seattle Animal Shelter and I am fostering it until it can be adopted.');
}

var hangTen = prompt('Now you know I am from Australia. Do you think I can surf?');
console.log('Suring ability: ' + hangTen);
if (hangTen.toLowerCase() === 'yes') {
  alert('I\'m sorry incorrect. I grew up in Canberra which is inland, away from the beach. I learnt how to ski when I was younger instead.');
} else {
  alert('Correct! I grew up in Canberra which is inland, away from the beach. I learnt how to ski when I was younger instead.');
}

var homeCountries = prompt('Apart from Australia and the USA, do you think I have lived in any other countries?');
console.log('Countries lived: ' + homeCountries);
if (homeCountries.toLowerCase() === 'yes') {
  alert('Correct, I lived in London, UK for 12 months between finishing high school and starting university');
} else {
  alert('Sorry, that\'s incorrect. I lived in London for 12 months between finishing high school and starting university');
}

var japaneseFood = prompt('I love Japanese food, more than just sushi. I could eat good ramen for the rest of my life. Do you like Japanese food?');
console.log('Japanese food: ' + japaneseFood);
if (japaneseFood.toLowerCase() === 'yes') {
  alert('Nice! You should go to Japan if you haven\'t already and have the food there. It blew my mind!');
} else {
  var secretQuestion = prompt('Oh that\'s a shame. What is your favourite food?');
  console.log('Secret Question: ' + secretQuestion);
}
