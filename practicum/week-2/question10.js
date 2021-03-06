/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    var min = 9999999;
    for (var x = 0; x < input.length; x++){
        for (var y = 1; y < input.length - x; y++){
            var a = input[x];
            var b = input[y+x];
            var diff = Math.abs(b - a);
            if (diff <= min){
                if (diff < min){
                    min = diff;
                    var minPairs = [];
                    if (a < b){
                        minPairs.push([a,b]);
                    }else{
                    minPairs.push([b,a]);
                    }
                }else{
                min = diff;
                if (a < b){
                    minPairs.push([a,b]);
                }else{
                minPairs.push([b,a]);
                }
                }
            }

        }
    } 
    return minPairs;

};