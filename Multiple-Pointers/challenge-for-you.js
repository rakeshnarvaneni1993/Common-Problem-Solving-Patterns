// Problem Statement:
// Implement a function which accepts a sorted array, and counts the unique values in array. 
// Assume the array input to the function is always sorted.
// Ex: Array input [1,1,1,1,2] must return 2 because there are two (1 & 2) unique values in the array.
// There are multiple implementations for this problem. For example, we can use the frequency-counter pattern to solve this.
// But, try and solve it using the multi-pointer pattern.
// Try this on your own using the multi-pointer.js example. Solution is written below.
// Close your eyes, if you don't want to look at the solution :P

// Using multiple-pointer pattern, time complexity can be brought to O(n)
// We are only looping through the sorted array once.

function getNumOfUniqueValues(arr) {
    // Initializing two pointers. One from 0th index (pointer1) and other from 1st index (pointer2)
    if (arr.length === 0) {
        return 0;
    }
    let pointer1 = 0;
    let pointer2 = 1;
    let count = 1; // Setting count to 1 because array will have atleaset one value
    while (pointer2 < arr.length) {
        // checking if elements next to each other are equal (REMEBER: THIS IS SORTED ARRAY)
        // If equal, incrementing pointer2 and keeping pointer1 at the same place to compare next element.
        if (arr[pointer1] === arr[pointer2]) {
            pointer2++;
        } else {
            // If adjacent elements are not equal, moving pointer1 to pointer2's position and incrementing pointer 2 by 1
            // Also, incrementing count by 1
            pointer1 = pointer2;
            pointer2++;
            count++
        }
    }
    return count;
}
getNumOfUniqueValues ([1,1,1,1,1,2]); // Logs 2