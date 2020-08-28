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
    var retval = [];
        for (var x = 0; x < input.length; x++){
            if (input.length - x === 0) {
                return retval.length;
            }
            else {
                for (x+1; x < input.length - x; x++){
                    if (input[x]<input[x+1]){
                        let pair = input[x].toString().concat(input[x+1]);
                        if (retval.indexOf(pair) === -1){
                            retval.push(pair);
                        }
                    }

                } 
            }
    } return retval.length;

};