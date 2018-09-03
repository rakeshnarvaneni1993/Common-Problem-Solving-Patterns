// Problem Statement:
// Given two strings, write a function to determine if the second string is an anagram of the first.
// Hint: An anagram is a word, phrase or a name formed by rearranging the letters of another
// Ex: 'cinema' formed by rearranging 'iceman'.
// Try this on your own using the frequency-counter.js example. Solution is written below.
// Close your eyes, if you don't want to look at the solution :P


function areAnagrams(str1, str2) {
    const str1Obj = {};
    const str2Obj = {};
    // Constructing Object 1 (str1Obj)
    constructObject (str1, str1Obj);
    // Constructing Object 2 (str2Obj)
    constructObject (str2, str2Obj);
    // Checking if element in str1 exist in str2 and it's frequency as well.
    for (let key in str1Obj) {
        if (!str2Obj[key] || (str2Obj[key] !== str1Obj[key])) {
            return false;
        }
    }
    return true;
}

function constructObject(str, obj) {
// Because objects are pass by reference, this below function does not return the object.
// all the mutans to obj, will be made to the original object as well.
    for (let key of str) {
        obj[key] = (obj[key] || 0) + 1;
    }
}

areAnagrams('anagram', 'nagaram'); // Logs true
areAnagrams('rat', 'car'); // Logs false