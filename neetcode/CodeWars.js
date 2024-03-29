

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

/* <------------------------- sum of highest and lowest ----------------------> */

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

//let len =[6, 2, 1, 8, 10 ]//=> 16
let len = [ 1, 1, 11, 2, 3 ] // => 6

const highestLowest = (arr) => {

  arr = arr.sort((a,b) => a - b)
  console.log(arr)
  let returner = 0;

  for ( let i = 1; i < arr.length -1; i++) {
    returner += arr[i]
  }

  return returner

}

//console.log(highestLowest(len))

/* <------------------------- triangle ----------------------> */

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

const triangle = (a, b) => {

  return 180 - (a+b)

}

//console.log(triangle(45, 45))

/* <------------------------- triangle ----------------------> */

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// 36, 7 => 22
// 55, 30 => 5

const age = (dad, son) => {

  const tarDadAge = son * 2
  return Math.abs(dad - tarDadAge)

}

//console.log(age(36, 7))

/* <------------------------- multiply ----------------------> */

arr= [1, 2, 3, 4] //=> 1 * 2 * 3 * 4 = 24

const multiply = (arr) => {

  return arr.reduce((acc, curr)=> {
    return curr * acc
  },1 )

}

//console.log(multiply(arr))

/* <------------------------- bool ----------------------> */

function boolToWord( bool ){
  if (bool === true) {return 'Yes'}
  if (bool === false) {return "No"}
}


/* <-------------------------  ----------------------> */

const getInt = (string) => {
  return parseInt(string[0])
}


/* <------------------------- The Supermarket Queue codewars  ----------------------> */

// DESCRIPTION:
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12


const queueTime = (arr, till) => {
  // put the correct index at a till
  // subtract the following index. if remainder is less than or equal to one:
  // put next index at the appropriate till
  // add the next index to total time variable

  let cache = {}
  let cacheMaker = till
  let i = 0

  while(cacheMaker > 0){
    cache[cacheMaker] = arr[i]
    console.log(cacheMaker)
    cacheMaker--
    i++
  }

  for (let j = i; j < arr.length; j++) {

  }

return cache







}

//console.log(queueTime([10,2,3,3], 6))

// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript


/* <-------------------------   ----------------------> */


// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

const switchNum = (num) => {
  let cache = {
    one : 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0
  }

  for (let key in cache) {
    if (cache[key] === num) {
      return key
    }
  }
}

//console.log(switchNum(4))
////

/* <-------------------------  grasshopper  ----------------------> */

const grasshopper = (base, factor) => {

  if( base % factor == 0 ) {
    return true
  }
  return false

}

//console.log(grasshopper(10, 2))

/* <-------------------------  grasshopper  ----------------------> */

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

const rentalCarCost = (d) => {
 const base = 40 * d

 if (d >= 7) {
  return base - 50
  
 }

 if(d >= 3){
  return base - 20
 }

 return base

}

/* <-------------------------  area or perimeter ----------------------> */

const areaOrPerimeter = function(l , w) {
  // Return your answer

  if( l === w ) {
    return l*w
  }
  else return l * 2 + w * 2
};

/* <-------------------------  DNA ----------------------> */

function DNAStrand(dna){
  if (typeof dna === 'string') {
    // change string to array
    // if conditions
    // change array to string and return

    const dnaArray = dna.split("")
    console.log(dnaArray)
    for (let i = 0; i < dnaArray.length; i++){
      if(dnaArray[i]=== 'A'){
        dnaArray[i] = 'T'
      }
      else if(dnaArray[i] === 'T'){
        dnaArray[i] = 'A'
      }

      else if(dnaArray[i] === 'G') {
        dnaArray[i] = 'C'
      }

      else if(dnaArray[i] === 'C') {
        dnaArray[i] = 'G'
      }
    }
    const returner = dnaArray.join("")
    return returner
  }
  return 'bleh'
}

//console.log(DNAStrand('ACTG')) 


/* <-------------------------  Group Anagrams ----------------------> */

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

/* <-------------------------   ----------------------> */

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {

 

  for ( let i = 0; i < a.length; i++){
    console.log('this is a', a[i])

    for ( let j = 0; j < b.length; j++) {
      if(a[i]==b[j]) {
        a.splice(i, 1)
        console.log('cest b',b[j])
        }
      }
    }
  return a
  
}

console.log(arrayDiff([1,2,2,2,3],[2]))

function arrayDiff(a, b) {
  if(b.length==0 || a.length==0)
    return a;
  for(let i =0;i<a.length;i++){
    for(let j=0;j<b.length;j++){
      if(a[i]==b[j]){
        a.splice(i,1);
        i--;
      }
    }
  }
  return a;
}


