/*
Given an array input of 0s and 1s and an integer k, 
return true if all ones(1s) are at least k places away from each other, 
otherwise return false.

Example:
input: input = [1,0,0,0,1,0,0,1], k = 2
output: true
*/

var kStepAway = function(input, k) {
    for (var step = 0; step < input.length; step++){
        if (input[step] === 1 && step ===0){
            var zeros = 0;
            continue;
        }if (input[step] === 1){
            if (!zeros === k){
                return false;
            }else{
                zeros = 0;
            }
        }if (input[step] === 0){
            zeros++;
        }
    }
    return true;
};