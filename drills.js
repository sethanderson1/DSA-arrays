const Array = require('./Arrays')
const mem = require('./memory')
const memory = new mem();

Array.SIZE_RATIO = 3;

// Create an instance of the Array class
const arr = new Array()

// Add an item to the array
// arr.push(1)
// arr.push(2)
// arr.push(3)
// arr.push(4)
// arr.push(5)
// arr.push(6)
// arr.push(7)
// arr.push(8)
// arr.push(9)
// arr.push(10)
// arr.push(11)
// arr.push(12)
// arr.push(13)
// arr.push(14)
// arr.push(15)
// arr.push(16)
// arr.push(17)
// arr.push(18)
// arr.push(19)
// arr.push(20)
// arr.push(21)
// arr.push(22)
// arr.push(23)
// arr.push(24)
// arr.push(25)
// arr.push(26)
// arr.push(27)
// arr.push(28)
// arr.push(29)
// arr.push(30)

// arr.insert(3,0)

// arr.push(5);
// arr.push(15);
// arr.push(19);
// arr.push(45);
// arr.push(10);



console.log('arr', arr)
console.log('memory.memory.slice(0,arr._capacity+5)',
    memory.memory.slice(0, arr._capacity + 5))
console.log('memory.head', memory.head)


// add pop method 

// arr.pop();
// arr.pop();
// arr.pop();

arr.push("tauhida something");


console.log('arr', arr)
console.log('memory.memory.slice(0,arr._capacity+5)',
    memory.memory.slice(0, arr._capacity + 5))
console.log('memory.head', memory.head)

// print first item in array
console.log('arr.get(0)', arr.get(0))

console.log(arr.URLify("tauhida something"))


// filter an array 

const arr5 = [1, 5, 1, 5, 1]

function filterLessThan5(arr) {
    let i = 0
    let len = arr.length
    while (i < len) {

        if (arr[i] < 5) {
            arr.splice(i, 1)
            len--
        } else {
            i++
        }
    }
    return arr
}

console.log('filterLessThan5(arr5)', filterLessThan5(arr5))

// find max sum 

const arrMaxSum = [4, 6, -3, 5, -2, 1]

// function maxSum(arr) {


//     let max = 0
//     let start = 0





//     function sum(arrSegment) {
//         let total = 0
//         for (let i = 0; i < arrSegment.length; i++) {
//             total += arrSegment[i]
//         }
//         return total
//     }

//     return


// }

// console.log('maxSum(arrMaxSum)', maxSum(arrMaxSum))


var maxSubArray = function (nums) {
    let maxSoFar = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        maxSoFar = Math.max(current, current + maxSoFar);
        max = Math.max(max, maxSoFar);
    }
    return max;
};

// merge array 

const arr1 = [1, 3, 6, 8, 11]
const arr2 = [2, 3, 5, 8, 9, 10]

function mergeSorted(a, b) {
    var answer = new Array(a.length + b.length), i = 0, j = 0, k = 0;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            answer[k] = a[i];
            i++;
        } else {
            answer[k] = b[j];
            j++;
        }
        k++;
    }
    while (i < a.length) {
        answer[k] = a[i];
        i++;
        k++;
    }
    while (j < b.length) {
        answer[k] = b[j];
        j++;
        k++;
    }
    return answer;
}

console.log('mergeSorted(arr1,arr2)', mergeSorted(arr1,arr2))