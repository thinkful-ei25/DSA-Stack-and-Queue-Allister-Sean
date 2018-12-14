const Stack = require('./Stack'); 

function isPalindrome(s) { 
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    
    /*
        convert string to lower case remove punctuation
        iterate through string and push chars into stack
        pop all the items in stack while concactening into an new string
        does the new string match the original??        
    */
    let isPalindromeStack = new Stack(); 
    for (let i = 0; i < s.length; i++){ 
        isPalindromeStack.push(s[i]); 
    }

    let nS = ""; 
    for (let i = 0; i < s.length; i++){ 
        let char = isPalindromeStack.pop(); 
        nS+= char; 
    }

    if (s == nS){ 
        return true; 
    }
    
    return false; 
}

module.exports = {isPalindrome}; 