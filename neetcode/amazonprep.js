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



// add a node

//const newNode = new ListNode

// practice lists from unit 2 and then do this



// ListNode.prototype.add = function (value) {

//   let newNode = new ListNode(value)
// //console.log(newNode)
//   let current
//   if(this.val === null){
//     this.val = newNode
   
//   }
  
//  //if(!this.next) {
//     //this.next = newNode
//   // }
//   else {
   
//     current = this.val;
    
//     while (current.val.next){
//       current = current.val.next
//     }
    
//     current.val.next = newNode
   

//   }
// }
// const fruits = new ListNode('apple', null)
// // console.log(fruits)

// fruits.add('durian')
// fruits.add('cranberry')
// console.log(fruits)


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//list1 = [10,20,30,40] // 10[20[30[40]]]
//list2 = [15, 25, 35]

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
   }
var mergeTwoLists = function(list1, list2) {
  const listToReturn = new ListNode()
  let head = listToReturn

  while (list1 && list2) {
    //if list1 is greater
    if (list1.val < list2.val){
      head.next = new ListNode(list1.val)
      head = head.next
      list1 = list1.next
    }
    // if list2 is equal to list1
    else if(list1.val === list2.val) {
      head.next = new ListNode(list1.val);
      head = head.next
      head.next = new ListNode(list2.val);
      head = head.next
      list1 = list1.next
      list2 = list2.next
    }
    // if list2 > list1

    else {
      head.next = new ListNode(list2.val);
      head = head.next
      list2 = list2.next
    }
  }
  if (list1) {
    head.next = list1
  }

  if(list2) {
    head.next = list2
  }

  return listToReturn.next
    
};
// making a linkedList to test
const adding = (nums) => {
  let dummy= new ListNode()
  let dummyhead = dummy

  let i = 0
  while (i < nums.length) {
    dummyhead.next = new ListNode(nums[i])
    dummyhead = dummyhead.next
    i++
  }
  return dummy.next

  

}
const arr1 = adding([10, 20, 30, 40])
const arr2 = adding([15, 25, 35])


//console.log(mergeTwoLists(arr1, arr2))
//https://leetcode.com/problems/merge-two-sorted-lists/solutions/1747030/js-easy-solution-faster-than-99/
// https://www.youtube.com/watch?v=EvgZCUhTosc



/**
 * Definition for singly-linked list.

 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {

  let l1String = ''
  let l2String = ''

  while (l1) {
    l1String += l1.val
    l1 = l1.next
  }

  while (l2) {
    l2String += l2.val
   
    l2 = l2.next
  }

  //l1String = l1String.reverse() 
  l1String= Number(l1String)
  //l2String = l2String.reverse()
  l2String = Number(l2String)

  numberAns = l1String + l2String
  

  arrForList = numberAns.toString().split("").reverse()
  

  let dummyhead = new ListNode('yo')
  let head = dummyhead
  
  let i = 0
  while (i < arrForList.length) {
    head.next = new ListNode( arrForList[i])
    head = head.next
    i++
  }
  
  return dummyhead.next
    
};

console.log(addTwoNumbers(arr1, arr2))

// iterate through linkedlist and grab all the nums into a string
// reverse the strings. change to numbers
//add the numbers
// split the string and push it into an array
//return array

//review https://leetcode.com/problems/add-two-numbers/solutions/3149937/simple-js-solution-o-max-m-n-time-o-max-m-n-space/?languageTags=javascript



















