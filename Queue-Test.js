const Queue = require('./Queue')
const QueueTwo = require('./Queue-of-two-Stacks'); 

function main() {
    const starTrekQ = new Queue();
    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Spock')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')

    // console.log(starTrekQ.peek());

    starTrekQ.dequeue();
    starTrekQ.dequeue();

    
    // starTrekQ.display();
    const queueless = new QueueTwo(); 
    queueless.enqueue('what?')
    queueless.enqueue('where?')
    queueless.enqueue('why?')
    queueless.enqueue('who?')
    console.log(queueless.dequeue()); 
    console.log(queueless.dequeue()); 
    console.log(queueless.dequeue()); 

}



main()