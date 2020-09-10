/*
Given a set of distinct integers, input, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
 
Example:
 input: [1,2,3]
 output: [
  [],   
  [1],
  [2],
  [3],  
  [1,3],
  [2,3],
  [1,2],
  [1,2,3]
]
*/

var powerSet = function(input) {

  var retVal = [[]];
  var length = input.length;
  for (var x = 0; x < length; x++){
    for (var y = x + 1; y < (length - x)-1;y++){
      var slice = input.slice(x,y);
      console.log(slice);
      if (!slice in retVal){
        retVal.push(slice);
      }
    }
    }
    console.log(retVal);
    return retVal;


};