/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
    var retFibo = [];
    if (n > 1){
        retFibo.push(1);
    }
    if (n > 2){
        retFibo.push(1);
    }
    for (var num = 2; num < n - 2; num++){
        var a = retFibo[num-2];
        var b = retFibo[num-1];
        var c = a + b;
        retFibo.push(c);

    }
    console.log(retFibo);
    return retFibo;
    

};