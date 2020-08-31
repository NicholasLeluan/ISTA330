/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {

    var shell = [];
    for (var x = 0; x < input.length; x++){
        shell.push('null');
    }
    for (var curr=0; curr < input.length; curr++){
        var letter = input[curr];
        var index = shuffleIndices[curr];
        shell[index] = letter;
    }
    return shell.join('');

};