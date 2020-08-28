/*
An array of integers, input, is given.
A pair (i, j) is called an ordered pair if input[i] < input[j] and i < j.
Return the number of ordered pairs.
Example:
input: [4, 2, 6, 9]
output: 5
There are 5 ordered pairs: (4, 6), (4, 9), (2, 6), (2, 9)
*/

var numberOfOrderedPairs = function(input) {
    var retArray = [];
    for (var x = 0; x < input.length - 1; x++) {
        var i = input[x];
        for (var z = 1; z < input.length - x; z++) {
            var j = input[x+z];
            var pair = i.toString().concat(j.toString());
            if (i < j && retArray.indexOf(pair)===-1){
                retArray.push(pair);
            }
        }
    }return retArray.length;

};