/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question, 
we define empty string as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {
    if (s.length == 0){
        return true;
    } 
    else{
        var zero = 0;
        var end = s.length - 1;
        var letters = "!@#$^&*().-,";
        var first = s.charAt(zero).toUpperCase();
        var last = s. charAt(end).toUpperCase();
        if(letters.includes(first)){
            first = s.charAt(zero+1);
        }
        if(letters.includes(last)){
            last = s.charAt(end-1).toUpperCase();
        }
        if (s.charAt(first) == s.charAt(last)){
            var temp = s.slice(1,-1);
            console.log(temp);
            return isPalindrome(temp);
        }
        else{
            return false;
        }
    }

};