// Problem Statement:
// Given a string, find the longest streak of consecutive unique characters
// Ex: String input 'longestsubstring' must return 8
// Try and solve it using the sliding-window pattern pattern.
// Try this on your own using the sliding-window.js example. Solution is written below.
// Close your eyes, if you don't want to look at the solution :P

function findConsecUniqueCharsWithSlidingWindow(str) {
    // This Obj will monitor the unique charactes in one window
    var charsSeen = {};
    // Length that will be returned
    var length = 0;
    // temporary length holder
    var tempLength = 0;
    for (let i = 0; i < str.length; i++) {
        // Checking if character already exists in the window.
        // Since 0 is falsu value, I have to check for that explicitly.
        if (charsSeen[str[i]] || charsSeen[str[i]] === 0) {
           // Resetting the values when duplicate is encountered
           length = Math.max(tempLength, length);
           tempLength = 0;
           // Taking the control to once pointer after the first instance of duplicate character
           i = charsSeen[str[i]];
           // Resetting duplicate monitoring obj
           charsSeen = {};
        } else {
            // If the character is not present in the Obj, updating length and monitoring Obj
            tempLength++;
            charsSeen[str[i]] = i;
        }
    }
    return Math.max(tempLength, length);
 }
 
 findConsecUniqueCharsWithSlidingWindow('longestsubstring');