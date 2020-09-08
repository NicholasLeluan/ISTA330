/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  var retPas = [];
  if (n > 1){
    retPas.push([1]);
  }
  if (n > 2){
    retPas.push([1,1]);
  }
  if (n > 3){
    for (var x = 2; x < n; x++){
      retPas[x] = [1];
      for (var y = 1; y <= row -1; y++){
        retPas[x][y] = retPas[x-1][y] + retPas[x-1][y-1];
        retPas[x].push(1)
      }
    }
  }return retPas;
};