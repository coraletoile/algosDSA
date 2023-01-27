//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

//nums = [1,2,3,1]
// Output: true
// Example 2:

//nums = [1,2,3,4]
// Output: false
// Example 3:

// nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

/* <------------------------- contains duplicate ----------------------> */
function containsDuplicate (array) {
  // check length of set
  // check length of array
  // if set is less than or equal to array return false
  //if not return true

  const newArr = [...new Set(array)]
  console.log(newArr)

  if(newArr.length < array.length) {
    return true
  }
  return false
}

//console.log(containsDuplicate(nums))



/* <------------------------- valid Anagram ----------------------> */

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

 //s = "anagram", t = "nagaram"
// Output: true
// Example 2:

//s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?


// could recurse
// loop
//check if current index of t is included in s
// if included, delete that element of s
// if not included, return false

// sort s and t
  // change to array and split
// if first index of both are same, recurse and pass slice

function validAnagram (s, t) {

const sortedS = s.split('').sort()
const sortedT = t.split('').sort()

function recurse (a, b) {

  if(b[0] === undefined){
    return true
  }

  if(a[0] === b[0]){
    a = a.slice(1,-1)
    b = b.slice(1,-1)
    return recurse(a, b)
   
  }
  else if(a[0] !== b[0]) {
    return false
  }



}
return recurse(sortedS, sortedT)

//return sortedT

}

function validAnagram2 (s, t) {
  const sortedS = s.split('').sort().join("")
  const sortedT = t.split('').sort().join("")

  return sortedS == sortedT

}


//console.log(validAnagram2(s, t))

/* <------------------------- valid Anagram ----------------------> */

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

//nums = [2,7,11,15]
//target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

//let nums = [3,2,4]
//let target = 6
// Output: [1,2]
// Example 3:

//nums = [3,3] 
//target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

//////// this only works if sorted
const twoSum = (nums, target) => {
  // two pointers
  // sort numbers first
  // while loop, two pointers
  // check difference against var originally set to infinity
  // if difference is larger, move left most pointer, if too small move right most pointer
  // 
  nums = nums.sort((a, b) => a -b)
  
  let diff = Infinity
  const returner = [];

  let i = 0
  let j = nums.length -1

  while (i < j) {
    let checker = nums[i] + nums[j]
    
    if(checker === target) {
      console.log(nums[i], nums[j])
      return [i, j]
    }
    if (checker < target) {
      i++
    }
    else if (checker > target) {
      j--
    }
    
  }
  return false
}




const twoSum2 = (nums, target) => {
  let diff = Infinity;
  const returner = [];

  for ( let i = 0; i < nums.length; i++) {
    for ( let j = i+1; j< nums.length; j++){
      let sum = nums[i] + nums[j]
      if(sum === target){
        return [i, j]
      }
    }
  }
  return false
}

//console.log(twoSum2 (nums, target))

/* <------------------------- group anagrams ----------------------> */
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// iterate through array
// look at one element
// push to an array
// change it to an array
// check .includes 


const groupAnagrams = (strs) =>{
  let returner = [];

  for ( let i = 0; i < strs.length; i ++){
    let arr = [strs[i]]
    let checker = strs[i].split('')
    for (let j = i + 1; j < strs[i]; j++) {


    }
  }
}


