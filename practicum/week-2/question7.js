/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
    var rows = M.length
    var cols = 0;
    for (var y = 0; y < M[0].length; y++){
        cols++;
    }
    var temp = rows;
    rows = cols
    cols = temp

    retRepose = [];
    for (var row = 0; row < rows; row++){
        var newRow = [];
        for (var num = 0; num < cols; num++){
            newRow.push(M[num][row]);
        }
        retRepose.push(newRow);
    }
    return retRepose;



};