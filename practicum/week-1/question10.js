/*
Given an integer n, return difference between the maximum and the minimum of its digits.

Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var nString = toString(n);
    var max = parseInt(nString.charAt(0));
    var min = parseInt(nString.charAt(0));
    for (var x = 1; x < nString.length;x++){
        if (parseInt(nString.charAt(x))> max){
            max = parseInt(nString.charAt(x));
        }else if (parseInt(nString.charAt(x))< min){
            min = parseInt(nString.charAt(x));
        }

    } return max - min;

};