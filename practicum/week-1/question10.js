/*
Given an integer n, return difference between the maximum and the minimum of its digits.

Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var nums = (""+n).split("");
    var max = Math.max(nums);
    var min = Math.min(nums);
    console.log(max,min);
    return max - min;
};