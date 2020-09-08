/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    var groupList = [];
    var mult = 1;
    for (var x = 0; x < n; x++){
        if (x > 8){
            groupList[x-(8*mult)].push(x);
        }else{
            groupList.push([x]);
        }
    } console.log(groupList);

};