/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
   var x = 0;
   var total = 0;
   var max = 0;
   for (x;x<input.length;x++){
           if (max < input[x]){
                   max = input[x]
           }
           total+=input[x]
   }
   total = total - max;
   if (total/max > 2){
           return true;
   }else{
           return false;
   }
};