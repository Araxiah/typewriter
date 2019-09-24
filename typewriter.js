// Assignment: Animated Sentence
// Maria (driver), Carol (navigator), Avi(navigator)

const sentence = "hello there from lighthouse labs";
const lastLetter = sentence + '\n';

// Assisted by Vasily (mentor)
// Must use a callback function in order to
// to print out each character before looping through
// the next letter of the sentence

const printLetter = (letter, delay) => {
  setTimeout( () => {
    process.stdout.write(letter)
  }, delay);
}
let number = 0;
for (const char of lastLetter) { 
  // this loops through each character of the sentence
  printLetter(char, number);
  number+= 50;
}

