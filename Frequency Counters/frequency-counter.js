// Problem Statement: 

// Given two arrays, find if all the elements from array1 are present in array2

// Traditional way of handling multiple data with multiple inputs
// Time Complexity: O(n^2)


function findAllTraditionalWay(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
       // indexOf() is still looping through arr2 to determine the index of the element passed.
       // So, this is also considerd another loop
       if (arr2.indexOf(arr1[i]) < 0) {
           return false;
       }
    }
    return true;
}

findAllTraditionalWay ([1,2,3], [1,2,3,4,5,6]); // logs true

// Using javascript objects, time complexity can be brought to O(n)
// Although there are three loops in this program, complexity is reduced to O(n)
// Remeber: Less code is always not better when it increases the complexity of the logic.

function findAllUsingObjects(arr1, arr2) {
    const firstArrObj = {};
    const secondArrObj = {};
    let isPresent = true;
    // Creating first Object from Array 1
    for (let i = 0; i < arr1.length; i++) {
        firstArrObj[arr1[i]] = (firstArrObj[arr1[i]] || 0) + 1;
    }
    // Creating second Object from Array 2
    for (let i = 0; i < arr2.length; i++) {
        secondArrObj[arr2[i]] = (secondArrObj[arr2[i]] || 0) + 1;
    }
    // Checking if all the keys from firstArrObj are present in secondArrObj
    Object.keys(firstArrObj).forEach((key) => {
        if (!secondArrObj[key]) {
            isPresent = false;
        }
    });
    return isPresent;
}
findAllUsingObjects ([1,2,3], [1,2,3,4,5,6]); // Logs true