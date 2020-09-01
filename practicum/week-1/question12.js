/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

A substring is balanced if it has ewual number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  var retArray = [];
  var subString = '';
  var a = 0;
  var b = 0;
  for (var curr = 0; curr < input.length; curr++){
    if (input.charAt(curr) === ('a')){
      a++;
      subString.concat('a');
    }else if (input.charAt(curr) === ('b')){
      b++;
      subString.concat('b');
    }if (a = b){
      retArray.push(subString);
      a = 0;
      b = 0;
      subString = '';
    }


  }return retArray.length;

};