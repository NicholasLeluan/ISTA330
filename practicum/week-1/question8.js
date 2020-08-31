/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    var retArray = [];
    for (var curr = 0; curr < input.length;cur++){
        var pushVal = 0;
        for (var temp = 0; temp < input.length; temp++){
            if (input[temp] > input[curr] && input[temp]%2===0){
                pushVal++;
            }
        }
    } return retArray;

};