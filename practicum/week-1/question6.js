/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    if (input.length % 2 === 1){
        return input[Math.floor(input.length/2)];
    }else {
        var high = input[(input.length/2)];
        var low = input[((input.length/2) - 1)];
        return ((high+low)/2);
    }

};