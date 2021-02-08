const word = 'JavaScript';
const character = 'J';

// check if the character (s) are there
// Use String.prototype.startsWith
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
console.log(word.startsWith(character)); // true

// This is the most modern and recommended approach. The remaining methods in this article are simply for reference and different scenarios.

// Use String.prototype.indexOf
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
console.log(word.indexOf(character) === 0); // true

// Use String.prototype.lastIndexOf
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/lastIndexOf
console.log(word.lastIndexOf(character, 0) === 0); // true


// An oldie. Use String.prototype.substring
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/substring
console.log(word.substring(0,1) === character);


// string[0] index
console.log(word[0] === character);

// Regular Expressions
console.log(new RegExp(`^${character}`).test(word) );

console.log(/^J/.test(word) );