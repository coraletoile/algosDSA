// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// const twoSum = (nums, target) => {
// nums = nums.sort((a, b) => a - b)

//   let onePoint = 0
//   let twoPoint = nums.length-1

//   const ans = []
 

//   while (onePoint <= twoPoint) {
//     if (nums[onePoint] + nums[twoPoint] === target) {
//       ans.push(onePoint)
//       ans.push(twoPoint)
//       return ans
//     }
//     if (nums[onePoint] + nums[twoPoint] < target) {
//       onePoint ++
//     }
//     if(nums[onePoint] + nums[twoPoint] > target) {
//       twoPoint --
//     }
//   }
//   return ans
// }



const twoSum = (nums, target) => {
  
  const obj = {};

  for ( let i = 0; i < nums.length; i ++) {
    let complement = target - nums[i]
    if(obj.hasOwnProperty(complement)){
      console.log(obj)
      return [obj[complement], i]
    }
    obj[nums[i]] = i 
    
  }

  return false 


}

//console.log(twoSum([2,7,11,15], 9))

const twoSum2 = (arr, sum) => {
  const obj = {};

  let i = 0;
  while (i < arr.length){
    const complement = sum - arr[i]
    if(obj.hasOwnProperty(complement)) {
      return [obj[complement],i]
    }
    obj[arr[i]] = i 
    i ++
  }
}

//console.log(twoSum2([2,7,11,15], 9))

// linkedlist Practice

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next=== undefined? null : next)
}

// add a node

//const newNode = new ListNode

// practice lists from unit 2 and then do this

function Node(val) {
  this.val = val;
  this.next = null
}

ListNode.prototype.add = function (value) {

  let newNode = new ListNode(value, null)
//console.log(newNode)
  let current
  if(this.val === null){
    this.val = newNode
   
  }
  
 //if(!this.next) {
    //this.next = newNode
  // }
  else {
    //console.log('hi')
    current = this.val;
    //console.log(current.next)
    while (current.next){
      current = current.next
    }
    console.log(current.next)
    current.next = newNode
    console.log(current.next)

  }
}
const fruits = new ListNode('apple', null)
console.log(fruits)

fruits.add('durian')
fruits.add('cranberry')
console.log(fruits)
console.log(node)









