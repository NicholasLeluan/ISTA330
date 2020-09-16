/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/

var minMoves = function(A) {
    var visited = [];
    var totalIncrements = 0;
    for (var x = 0; x < A.length; x++){
        if (!(visited.includes(A[x]))){
            visited.push(A[x]);
        }else{
            var check = A[x];
            while (visited.includes(check)){
                check += 1;
                totalIncrements++;
            }
            visited.push(check);
        }
    }
    return totalIncrements;

};