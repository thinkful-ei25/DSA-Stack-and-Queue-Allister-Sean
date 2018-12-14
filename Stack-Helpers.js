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

function matchParens(expression) {
    let expressionStack = new Stack();
    let parenCounterForward = 0;
    let parenCounterBack = 0
    
    for (i = 0; i < expression.length; i++) {
        expressionStack.push(expression[i])
        if (expression[i] === '(') {
            parenCounterForward++;
        }
        if (expression[i] === ')') {
            parenCounterForward--
        }
        if (parenCounterForward === -1) {
            return i
        }
        if (expression[expression.length-1-i] === ')') {
            parenCounterBack++
        }
        if (expression[expression.length-1-i] === '(') {
            parenCounterBack--
        }
        if (parenCounterBack === -1) {
            return expression.length - 1 - i
        }
        
    }
    return true;

    
    /*
   instantiate new stack
   iterate through string and push chars into stack
   push all items onto stack with paren counter and position counter
   if paren counter = -1 return position counter
   reset paren counter
   iterate through stack from top with paren coutner and position counter
   if paren counter = -1 return string length - position counter


   input: (((((()
   output: 0 or 4
   
   input: ((())())())
   output: 10 or 7
   
   input: ((())))
   output: 6

   input: ((((())
   output: 0
   
   input: (5+5)
   output: true

   input: ()
   output: true

   input: (5+5
    output: 0

    input: 5+5)
    output: 3
    */
}

function sortStack(s){ 
    let sortedStack = new Stack(); 

    while(s.top !==null){ 
        let tmp = s.pop(); 

        while(sortedStack.top !==null && sortedStack.peek() > tmp){ 
            s.push(sortedStack.pop()); 
        }
        sortedStack.push(tmp); 
    }
    return sortedStack; 
}

module.exports = {isPalindrome, matchParens, sortStack}; 