// Problem Statement: 

// Given a sorted array, find the first pair that add up to 10

// Traditional way of handling multiple data with multiple inputs
// Time Complexity: O(n^2)

function findPairTraditionalWay(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 10) {
                return [arr[i], arr[j]];
            }
        }
    }
}

findPairTraditionalWay([1,2,3,4,5,6,7,8,9]);


// Using multiple-pointer pattern, time complexity can be brought to O(n)
// Remeber: Less code is always not better when it increases the complexity of the logic.

function findPairMultiplePointerWay(arr) {
    // Initializing two pointers. One from left and other from right of the array.
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    while (leftPointer < rightPointer) {
        const sum = arr[leftPointer] + arr[rightPointer];
        // If sum is equal to the value given, return the pair.
        if (sum === 10) {
            return [arr[leftPointer], arr[rightPointer]];
        // If sum is greater than 10, since the array is sorted (higher values on right), 
        // we know we have to reduce the right pointer by 1
        } else if (sum > 10) {
            rightPointer--
        // If sum is less than 10, since the array is sorted (smaller values on left), 
        // we know we have to increase the left pointer by 1 to match the sum
        } else if (sum < 10) {
            leftPointer++;
        }
    }
}

findPairMultiplePointerWay([1,2,3,4,5,6,7,8,9]);