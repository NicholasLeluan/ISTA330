
/*
Given an array of integers, 1 ≤ input[i] ≤ n (n = size of array), 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */

 var findDuplicates = function(input) {
     var dict = {};
     var retArray = [];
     for (var x = 0; x < input.length; x++){
         if (input[x] in dict){
             dict[input[x]] = dict[input[1]] + 1;
         }
         else{
             dict[input[x]] = 1;
         }
     }
     for (var key in dict){
         if(dict[key] === 2){
            retArray.push(parseInt(key));
         }
     }
     console.log(dict);
     return retArray;
    
 };
