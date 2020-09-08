/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    var i = input[0];
    var j = input[1];
    if (i<=j){
        for (var curr = 2; curr < input.length - 2; curr++){
            if (input[curr] > input[curr+1]){
                return false;
            }
        }
    }else if (i >= j){
        for (var curr = 2; curr < input.lenght-2; curr++){
            if (input[curr] > input [curr+1]){
                return false;
            }
        }
    }
    return true;


};

console.log('hi');