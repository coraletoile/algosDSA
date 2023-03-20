/* <------------------------- isPalindrome  ----------------------> */

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// get other characters out of there
// 

function isPalindrome (s) {

  // now try two pointers with a while loop, check first and last are the same
  // check if tolowercase is the same
  // if hit a non-letter, then go to the next one

  let i = 0
  let j = s.length-1

  while (i < j) {
    
    let banana = s[i]
    let apple = s[j]
    if(!/[a-zA-Z0-9]/.test(banana)) {
      i++
    } else if (!/[a-zA-Z0-9]/.test(apple)) {
      j--
    } else { if (banana.toLowerCase() != apple.toLowerCase()) {
      return false;
    }
  
      i++
      j--
  }
}
  return true

}




console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("Hannah"))
console.log(isPalindrome("race a car"))