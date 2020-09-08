/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    var dict = {};
    for (var i = 0; i < input.length; i++){
        if (input[i] in dict){
            dict[input[i]] = dict[input[i]] + 1
        }
        else{
            dict[input[i]] = 1;
        }
    }
    var max = 0;
    var maxVals = [];
    for (var val in dict){
        if (dict[val] > max){
            max = dict[val]
            if (val == dict[val]){
                maxVals.push(parseInt(val));
            }
        }
    }
    console.log(maxVals);
    if (maxVals.length === 0){
        return -1;
    }else{
        var retMax = 0;
        for (var c = 0; c < maxVals.length; c++){
            if (maxVals[c] > retMax){
                retMax = maxVals[c]
            }
        }return retMax;
    } 


};