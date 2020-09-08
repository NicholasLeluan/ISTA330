/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the majority element does not exist return undefined.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    var m = (input/2);
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
    for (var x in dict){
        if (dict[x] > max){
            max = dict[x];
        }
    }
    if (max > m){
        return max;
    }
    else{
        return undefined;
    }

};