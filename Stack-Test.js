const Stack = require('./Stack'); 

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
    
}

main(); 

