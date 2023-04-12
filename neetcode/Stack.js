 /* <------------------------- Stack practice from data structures ----------------------> */
// do not use any native array methods
function Stack() {
  this.storage = {};
  this.index = 0;
}

// passing in value to the function
Stack.prototype.push = function(value) {
  // append the object at key storage in the prototype
  this.storage[this.index] = value;
  // increment the this.index
  this.index++;
  // return the length of the storage object
  return this.index;
};

Stack.prototype.pop = function() {
  // checked if this.index is 0, if it is 0 then we have an empty array
  if (this.index === 0) return undefined; 
  // decrement index because we are popping off the most recent element
  this.index--;
  let removedEl = this.storage[this.index];
  // delete the last property
  delete removedEl
  // returned the removed element
  return removedEl;
};

// Stack { storage: { '0': 1, '1': 2 }, index: 2 }
// [1, 2]

function Stack () {
  this.storage = {};
  this.index = 0 ;
}

Stack.prototype.push = function (value) {
  this.storage[this.index] = value
  this.index++
  return this.index
}

Stack.prototype.pop = function () {
  if(this.index === 0) {
    return undefined
  }
  this.index--
  let removedEl = this.storage[this.index]
  delete removedEl
  return removedEl
};


 
 
 /* <------------------------- validParentheses ----------------------> */

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


const validParenthesesTry = (strang) => {
  let storage = {};
  let index = 0;
  if(strang[0]=== "]" || strang[0]=== "}" || strang[0]=== ")") {
    return false
  }

  for ( let i = 0; i < strang.length; i++) {
    if(strang[i] === "[" || strang[i] === "{" || strang[i] === "("){
      storage[index] = strang[i]
      index++
      console.log(index)
    }
    if(strang[i] === "]" && storage[index - 1 ] !== "[") {
      console.log(storage)
      return false
    }
    if(strang[i] === "}" && storage[index - 1 ] !== "{") {
      console.log(storage)
      return false
    }
    if(strang[i] === ")" && storage[index - 1 ] !== "(") {
      console.log(storage)
      console.log(index)
      return false
    }
  }
  return true
}

//console.log(validParenthesesTry('(]'))


const validParenthesesAns = (strang) => {
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
}


  if(strang[0]=== "]" || strang[0]=== "}" || strang[0]=== ")") {
    return false
  }
  if (strang[strang.length -1]=== "[" || strang[strang.length -1]=== "{" || strang[strang.length -1]=== "{") {
    return false
  }

  let stack = []

  for ( let i = 0; i < strang.length; i++) {
    if(strang[i] === "[" || strang[i] === "{" || strang[i] === "("){
      stack.push(strang[i])
    }
    else if (pairs[stack.pop()] !== strang[i]){
      return false
    }
  }
  console.log(stack)
  return true
  // this is the answer return stack.length === 0

}

//console.log(validParenthesesAns("(}"))



 
