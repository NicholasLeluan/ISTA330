/*
There are n soldiers standing in a line. 
Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers 
under the following rules:

1. Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
2. A team is valid if:  (rating[i] < rating[j] < rating[k]) where (0 <= i < j < k < n).

Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).


 Example:
         input: [2,5,3,4,1]
         output: 1
         We can only form one team given the 
         conditions: (2,3,4)
*/

var howManyTeams = function(input) {
        var teams = 0;
        var x = 0;
        var y = 1;
        for (x; x< input.length; x++){
                var soldier1 = input[x];
                var y = 1;
                for (y+x; y < (input.length - x) -1 ; y++){
                        var soldier2 = input[y];
                        var z = 2;
                        for (y+x+z; z < (input.length - x -y)-2;z++){
                                var soldier3 = input[z]
                                if (soldier1 < soldier2 && soldier2 < soldier3){
                                        teams++;
                                
                                }
                        
                        }

                }
                
        }
   
};