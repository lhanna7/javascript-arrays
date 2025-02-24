/*
Given an array containing the english alphabet, write code that returns an array containing only the vowels (including "y").

Note:

* "a" is the first letter
* "e" is the fifth letter
* "i" is the ninth letter
* "o" is the 12th to last letter
* "u" is the 6th to last letter
* "y" is the second to last letter

*/

function getVowels(){
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 
  let vowels = ["a", "e", "i", "o", "u", "y"] 
  const onlyVowels = alphabet.filter(letter => vowels.includes(letter))

  // const newVowel = [
  //   alphabet[0],
  //   alphabet[4],
  //   alphabet[8],
  //   alphabet[alphabet.length - 12 - 1],
  //   alphabet[alphabet.length - 6 - 1],
  //   alphabet[alphabet.length - 2 - 1]
  // ]

  return onlyVowels
}

module.exports = getVowels

/*
You can run tests for this code to check your answers by running `npm run test-1`
*/
