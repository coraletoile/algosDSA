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




// console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("Hannah"))
// console.log(isPalindrome("race a car"))


 /* <------------------------- 3Sum ----------------------> */

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

const ThreeSum = (arr) => {

  // save sums, if hit a number that is the negative of that number, put all those
  // numbers in an array

  const returner = [];
  


}

