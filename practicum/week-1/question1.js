/*
Given an array of numbers, return the running sum of the array. 
Running sum of a cell in the array is the sum of the cells up to that cell.
For example given the input array [5, 6, 1], the running sum is 
[5, 5+6, 5+6+1]
*/

var runningSum = function(input) {
    var prime = 0
    var retval = []
    for (var x = 0; x < input.length+1; x++){
        let newNum = prime + input[x];
        retval.push(newNum);
        prime = newNum;
    }
    return retval;
};
