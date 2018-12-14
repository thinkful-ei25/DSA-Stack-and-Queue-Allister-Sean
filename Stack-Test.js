const Stack = require('./Stack'); 
const {isPalindrome} = require('./Stack-Helpers'); 

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

    console.log(isPalindrome("dad"));
    console.log(isPalindrome("A man, a plan, a canal: Panama"));
    console.log(isPalindrome("1001"));
    console.log(isPalindrome("Tauhida"));  
}


main(); 

