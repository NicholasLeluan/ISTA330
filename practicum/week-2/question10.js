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
        for (var y = 0; y < input.length - x; y++){
            var a = input[x];
            var b = input[y];
            if (a < b){
                var diff = b - a;
                if (diff <= min){
                    if (diff < min){
                        var minPairs = [];
                        minPairs.push([a,b]);
                    }else{
                    min = diff;
                    minPairs.push([a,b]);
                    }
                }
            }

        }
    }console.log(minPairs);

};