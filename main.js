// 1. https://the-winter.github.io/codingjs/exercise.html?name=firstLast6&title=Array-1

// function firstLast6(nums) {
//     return nums[0] === 6 || nums[nums.length - 1] === 6;
//   }


// 2.https://the-winter.github.io/codingjs/exercise.html?name=sameFirstLast&title=Array-1   

// function sameFirstLast(nums) {
    // return nums.length >= 1 && nums[0] === nums[nums.length - 1];
//  }

// 3.https://the-winter.github.io/codingjs/exercise.html?name=commonEnd&title=Array-1

// function commonEnd(a, b) {
    // return a[0] === b[0] || a[a.length - 1] === b[b.length - 1];
//   }
  
//  4.https://the-winter.github.io/codingjs/exercise.html?name=sum3&title=Array-1

// function sum3(nums) {
    // return nums[0] + nums[1] + nums[2];
//   }

//   5. https://the-winter.github.io/codingjs/exercise.html?name=rotateLeft3&title=Array-1

// function rotateLeft3(nums) {
//     let firstElement = nums.shift();
//     nums.push(firstElement);
//     return nums;
//   }

// 6.https://the-winter.github.io/codingjs/exercise.html?name=reverse3&title=Array-1

// function reverse3(nums) {
//     return nums.slice().reverse();
//   }
// 7.https://the-winter.github.io/codingjs/exercise.html?name=maxEnd3&title=Array-1

// function maxEnd3(nums) {
//     const maxValue = Math.max(nums[0], nums[2]);
    
//     return [maxValue, maxValue, maxValue];
//   }

// 8. https://the-winter.github.io/codingjs/exercise.html?name=sum2&title=Array-1

// function sum2(nums) {
//     return nums.length < 2 ? nums.reduce((a, b) => a + b, 0) : nums[0] + nums[1];
// }