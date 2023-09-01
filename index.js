function isPalindrome(word) {
  // Write your algorithm here
  // The goal --> Creating a program that will print only the words that have the same meaning if it was read from begging to the end and from the end to the begging.
  // task: Create a function that will check the words if it meet the conditions 
  // call the function every time the user clicks on "check the word" button


  const splitWord = word.split('') // turning the string to an array of characters to be able to reverse it.
  const reverseWord = splitWord.reverse('') 
  const joinSplitedParts = reverseWord.join('') // turning the array of characters into a single string to be able to compare it to the word that were given
  if (joinSplitedParts === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here

  locate the input and give it a name
  
  make a function that checks the value of the input
  if the value of input could be read from start to end and from end to start 
  then return true
  else return false
*/
/*
  Add written explanation of your solution here
  the code checks if the value of the input could be read from start to end, if it does then the program returns true and if its not, the program will return false  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log('=>', isPalindrome('monom'));

  console.log('')

  console.log("Expecting: false");
  console.log("=>", isPalindrome('copypast'))

  console.log('')

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
