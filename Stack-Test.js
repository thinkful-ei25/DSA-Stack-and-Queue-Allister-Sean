const Stack = require('./Stack'); 
const {isPalindrome, matchParens, sortStack} = require('./Stack-Helpers'); 

function main(){ 
    let starTreck = new Stack(); 
    starTreck.push("Kirk"); 
    starTreck.push("Spock");
    starTreck.push("McCoy");
    starTreck.push("Scotty");   
    starTreck.peek();
    starTreck.pop(); 
    starTreck.pop();
    starTreck.display();

    // console.log(isPalindrome("dad"));
    // console.log(isPalindrome("A man, a plan, a canal: Panama"));
    // console.log(isPalindrome("1001"));
    // console.log(isPalindrome("Tauhida"));
    console.log(matchParens('(5+5'));  
    let stack = new Stack(); 
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    
    let sortedStack = sortStack(stack); 
    sortedStack.display(); 

}


main(); 

