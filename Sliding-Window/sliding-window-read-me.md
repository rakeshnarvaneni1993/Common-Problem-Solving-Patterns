This pattern is most useful when you have to access a consecutive subset of of multiple data elements. For example, if you have to find the largest streak of unique letters in a string. 


For this problem, traditional way of doing is to have a 'for loop' and another 'for loop' inside it. Inner for loop will keep track of the subset length and outer loop will keep track of the entire length of data elements. But, the complexity grows as the length of input data elements grow and equals to O(n^2).

But, with the sliding-window pattern, this compleity can be brought to O(n).

Find the code in JS file. Both the methods are explained there.


If you want to practice more, look for challenge-for-you.js