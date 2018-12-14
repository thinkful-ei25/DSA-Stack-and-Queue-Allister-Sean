const Queue = require('./Queue')

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

    
    starTrekQ.display();
}



main()