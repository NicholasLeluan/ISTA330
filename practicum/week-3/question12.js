/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. 
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
*/

var isCrossing = function(s) {
    var iter = s.split("");
    var north = 0;
    var south = 0;
    var east = 0;
    var west = 0;
    for (var dir = 0; dir < iter.length; dir++){
        if (s[dir] == "N"){
            north++;
        }else if (s[dir] == "S"){
            south++;
        }else if (s[dir] == "E"){
            east++;
        }else if (s[dir] == "W"){
            west++;
        }
    }
    if (Math.abs(north - south) >= 2 || Math.abs(east - west) >= 2){
        return false;
    }else{
        return true;
    }

};