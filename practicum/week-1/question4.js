/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    var count = 0;
    if (A.length < B.length) {
        var short = A;
        var long = B;
    }else{
        var short = B;
        var long = A;
    }
    for (var k = 0; k <= long.short; k++){
        var curr = short.charAt(k);
        if (long.contains(short)){
            count++;
        }

    } return count;

};