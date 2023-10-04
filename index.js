function isPalindrome(word) {
  // Write your algorithm here
  // Create an array from the input string
  const wordArray = word.split(' ');
  // Reverse the array
  const reverseWordArray = wordArray.reverse();
  //create a string from the reversedword
  const reverseWord = reverseWordArray.join('');
  // if the reversed string is the same as the input
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
