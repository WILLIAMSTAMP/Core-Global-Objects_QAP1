// **Emtitting an event without argument

//                  ↓
// include the events module using the require() function:
const EventEmitter = require('events');
const { isArgumentsObject } = require('util/types');

// create a new instance of the EventEmitter class:
const emitter = new EventEmitter();

// attach one or more event handlers to the event by using the on() method:
emitter.on('saved', () => {
    console.log(`A save event occurred.`);
});
// emit the saved event using the emit('saved') method of the EventEmitter object:
emitter.emit('saved');






//**Emitting an event with an argument**

// //                 ↓
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // previously we did not pass any aditional data to the event listener. 
// // below we can pass a second argument inside the parentheses --'saved', (argument)--
// emitter.on('saved', (arg) => {
//     // the object(arg) passed has two properties.."name" and "Id"
//     console.log(`A save event occurred: name: ${arg.name}, id: ${arg.id}`);
// });

// emitter.emit('saved', {
//     id: 1,
//     name: 'William Stamp'
// });






// Further explination with examples

// // Synchronously calls each of the listeners registered for the event namedeventName, in the order they were registered, passing the supplied arguments to each.

// // Returns true if the event had listeners, false otherwise.

//                  ↓
// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

// // First listener
// myEmitter.on('event', function firstListener() {
//   console.log('Helloooo! first listener');
// // Prints:
//     // 'Helloooo! first listener'
// });

// // Second listener
// myEmitter.on('event', function secondListener(arg1, arg2) {
//   console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
//   // Prints:
//     // 'event with parameters 1, 2 in second listener'
// });

// // Third listener
// myEmitter.on('event', function thirdListener(...args) {
//   const parameters = args.join(', ');
//   console.log(`event with parameters ${parameters} in third listener`);
// });
// // Prints:
// // 'event with parameters 1, 2, 3, 4, 5 in third listener'

// console.log(myEmitter.listeners('event'));
// // Prints:
// // [
// //   [Function: firstListener],
// //   [Function: secondListener],
// //   [Function: thirdListener]
// // ]
// myEmitter.emit('event', 1, 2, 3, 4, 5);
