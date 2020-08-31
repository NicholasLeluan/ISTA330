/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function(input) {
       /* pair the even indexes with even; odd with odd
       */
       var allMins = 0;
       for (var x = 0; x < input.length; x+=2) {
              var A = input[x];
              var B = input[x+1];
              var min = Math.min(A,B);
              allMins += min;
       } return allMins;

};