const Queue = require('./Queue');



function pair(q1, q2) {
    while (q1.first !== null && q2.first !== null) {
        console.log('Male dancer is', q1.dequeue(), 'and female dancer is', q2.dequeue());
    }
}

const menQ = new Queue();

const womenQ = new Queue();
womenQ.enqueue('Jane');
menQ.enqueue('Frank');
menQ.enqueue('John');
menQ.enqueue('Sherlock');
womenQ.enqueue('Madonna');
menQ.enqueue('David');
menQ.enqueue('Christopher');
womenQ.enqueue('Beyonce');

pair(menQ, womenQ);




/*

Takes in two queues
Prints pairs until one of the queues is empty
F Jane

M Frank

M John

M Sherlock

F Madonna

M David

M Christopher

F Beyonce

*/