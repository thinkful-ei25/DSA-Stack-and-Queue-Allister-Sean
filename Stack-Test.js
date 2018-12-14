const Stack = require('./Stack'); 

function main(){ 
    let starTreck = new Stack(); 
    starTreck.push("Kirk"); 
    starTreck.push("Spock");
    starTreck.push("McCoy");
    starTreck.push("Scotty");   
    console.log(starTreck.pop()); 
    console.log(starTreck.pop()); 
    console.log(starTreck.pop()); 
    console.log(starTreck.pop()); 
}

main(); 

