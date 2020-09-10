/*
Given an array input of n integers
 where n > 1,  
 return an array output such that 
 output[i] is equal to the product of all the elements of input except input[i].

Example: 
input: [1,2,3,4]
output: [24,12,8,6]
*/

var productOfOthers = function(input) {
    var retArr = [];
    var tempInput = input;
    for (var curr = 0; curr < input.length; curr++){
        var multArr = input.splice(curr,1,1);
        var pushNum = 1;
        console.log(input);
        for (var num = 0; num < multArr.length; num++){
            pushNum = pushNum * multArr[num];
            }
    } return retArr;

};

console.log('hi');