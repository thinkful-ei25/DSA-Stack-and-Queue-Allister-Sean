let Stack = require('./Stack'); 
class QueueTwo{ 
    constructor(){ 
        this.first = new Stack(); 
        this.last = new Stack(); 
    }

    dequeue(){ 

        let curr = this.last.top; 
        while(curr.next.next !== null){ 
            curr = curr.next; 
        }

        curr.next = null; 

        return this.first.pop(); 
    }   

    enqueue(data){
        /*
            //first
            A -> B 
            //last
            B <- A

        */ 
        this.last.push(data); 
        let curr = this.last.top; 
        while(curr !== null){ 
            this.first.push(curr.data); 
            curr = curr.next; 
        }
    }

    /*
        stack 1
        dequeue
        pop

        A -> B -> C
        
        stack 2
        enqueue
        push 
        A <- B <- C
        F <- A <- B <- C 
        
    */

}

module.exports = QueueTwo; 