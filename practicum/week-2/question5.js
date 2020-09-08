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
    var i = 0;
    var j = 0;
    for (var curr = 0; curr < input.length; curr++){
        if (input[curr] >= input[curr+1]){
            if (input[curr+1] >= input[curr+2]){
                continue
            }else{
                return false;
            }
        }else if (input[curr] <= input[curr+1]){
            if (input[curr+1] <= input[curr+1]){
                continue
            }else {
                return false;
            }
        }
    }return true;

};

console.log('hi');