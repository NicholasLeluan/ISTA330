/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    var decoded = [];
    for (var pos = 0; pos < shuffleIndices.length; pos++){
        var newLetter = input[shuffleIndices[pos]];
        decoded.push(newLetter);
    } return decoded.join('');

};