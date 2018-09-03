// Problem Statement: 
// Given an array of integers and a number n, find the max sum of consecutive n numbers.
// For Example if inputs were [4, 2, 1, 6] and 4, output must be 13. Because 4+2+1+6 is 13.
// Traditional way of handling multiple data with multiple inputs
// Time Complexity: O(n^2)

function findMaxSumTraditionalWay(arr, n) {
    // Edge case where window size(n) is greater than size of the array
    if (n > arr.length) {
        return null;
    }
    // Creating an array to hold all the sums of the windows
    const arrOfSums = [];
    // Looping the array from 0 to arr.length - num + 1 because we don't want to access arr[arr.length + n] values because they don't exist
    for (let i = 0; i < arr.length - num + 1; i++) {
        let sum = 0;
        // This inner loop calculates sum of all the elements in the window (subset of array)
        for (let j = i; j < n; j++) {
            sum = sum + arr[j];
        }
        arrOfSums.push(sum);
    }
    // Sorting the sums array to get max value among the sum of values.
    arrOfSums.sort((a, b) => {
        return b-a;
    });
    return arrOfSums[0];
}

findMaxSumTraditionalWay([4, 2, 1, 6], 4); // Logs 13



// Using sliding-window pattern, time complexity can be brought to O(n)
// Remeber: Less code is always not better when it increases the complexity of the logic.
function findMaxSumWithSlidingWindow(arr, n) {
    // Although there are two for loops, the complexity is still at O(n) which is better than above solution of O(n^2)
    let maxSum = 0;
    let tempSum = 0;
    // Getting the sum of the values in first window
    for (let i = 0; i < n; i++) {
        maxSum = maxSum + arr[i];
    };
    tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
    // Starting from value after the first window, adding current element and substracintg the first element.
    // This gives us the value os second window
        tempSum = tempSum - arr[i - n] + arr[i]
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

findMaxSumWithSlidingWindow([4, 2, 1, 6], 2); // Logs 7