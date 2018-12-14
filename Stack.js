class Node{ 
    constructor(data, next){
        this.data = data;  
        this.next = next; 
    }
}

class Stack{ 
    constructor(){ 
        this.top = null; 
    }

    push(data){ 
        /*
            A <- B <- C <- D
                           t   N 
                            <-  N 
                                n.next = top
                                this.top = newItem   
        */
       if (this.top === null){ 
           this.top = new Node(data, null); 
           return this.top; 
       }

       let newNode = new Node(data, this.top); 
       this.top = newNode; 
    }

    pop(){ 
        /*
            A <- B <- C <- D
                           t
                           let removeNode = this.top
                           this.top = this.top.next
                           return removeNode
        */
        if (this.top === null){ 
            throw new Error('Cannot pop an empty Stack'); 
        }

        let removeNode = this.top; 
        this.top = removeNode.next; 
        return removeNode.data; 
    }

    peek() {
        console.log(this.top.data);
    }

    display() {
        if (this.top === null) {
            throw new Error("Can't display empty stack");
        }
        let current = this.top
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

module.exports = Stack; 