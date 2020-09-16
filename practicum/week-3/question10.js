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
        if (s.charAt(0).toUpperCase() == s.charAt(s.length-1).toUpperCase()){
            var temp = s.slice(1,-1);
            return isPalindrome(temp);
        }
        else{
            return false;
        }
    }

};