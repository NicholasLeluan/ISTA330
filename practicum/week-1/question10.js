/*
Given an integer n, return difference between the maximum and the minimum of its digits.

Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var nums = (""+n).split("");
    return Math.max(nums) - Math.min(nums);
};