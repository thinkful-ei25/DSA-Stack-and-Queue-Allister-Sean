const Queue = require('./Queue'); 


function OphidianBank(customers){ 

    while(customers.first !== null) { 
        let rando = Math.floor(Math.random()*100); 
        console.log(rando); 
        if (rando >= 60){ 
            let finished = customers.dequeue(); 
            console.log(`Customer ${finished} is done!`); 
        }
        else { 
            let notDone = customers.dequeue(); 
            console.log(`Customer ${notDone} goes to the end of the line :(`); 
            customers.enqueue(notDone); 
        }
    }

}


let customers = new Queue(); 
customers.enqueue('Freddie Mercury')
customers.enqueue('Jack Black')
customers.enqueue('David Bowie')
customers.enqueue('Jim Carey')

OphidianBank(customers); 
