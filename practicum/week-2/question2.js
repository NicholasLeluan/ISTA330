
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
         var max = 0;
     for (var k = 0; k < input.length; k ++){
             var intFull = 0;
             var length = input.length;
             for (var m = length; m >= 0; m--){
                     var arraySlice = input.slice(k,m);
                     var sliceSum = 0;
                     for (var x = 0; x < arraySlice.length; x ++){
                             sliceSum += arraySlice[x]
                     }
                     console.log(arraySlice);
                     console.log(sliceSum);
                     if (sliceSum > max){
                             max = sliceSum;
                             var start = k
                             var end = m
                             var retVal = sliceSum;
                     }

             }

     }return max;
    
 };
