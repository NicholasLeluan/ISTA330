/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

<<<<<<< Updated upstream
  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
=======
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balanced number of the partition.
>>>>>>> Stashed changes
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'

          MY NOTE: 
*/

var maxBalanceNumber = function(input) {
    var mid = Math.floor(input.length/2);


};