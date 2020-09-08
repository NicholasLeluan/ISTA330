/*
Given two integer arrays input1 and input2, 
and the integer d, return the d-count 
between the two arrays.

The d-count is defined as 
the number of elements input1[i] such that 
there is not any element input2[j] 
where |input1[i]-input2[j]| <= d.

Example:
input: input1 = [2,1,26,3], input2 = [-5,-2,10,-3,7], d = 6
output: 1
*/

var d_count = function(input1, input2, d) {
    var lengthA = input1.length;
    var lengthB = input2.length;
    var min = Math.min(lengthA, lengthB);
    var retCount = 0;
    for (var x = 0; x < min; x++){
        var a = input1[x];
        var b = input2[x];
        var net = Math.abs(a-b);
        if (net < d){
            retCount++;
        }
    }
    return retCount;


};