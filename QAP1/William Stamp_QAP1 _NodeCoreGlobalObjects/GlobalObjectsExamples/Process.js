// ***The “process” object is an instance of an EventEmitter. It provides information about, and control over, the current Node.js process.***

// ***The "process.env" Property***
//             
// The process.env property returns an object containing the user environment.
// Printing process.env property value

//         ↓
console.log(process.env);






// ***Node.js program to demonstrate the
// process.env Property***
            
// Include process module

//               ↓
// const process = require('process');
 
// // Calling process.env
// var env = process.env;
 
// // Accessing one by one
// console.log("operating system: " + env['OS']);
// console.log("alluserprofile: " + env['ALLUSERSPROFILE']);
// console.log("public directory: " + env['PUBLIC']);






// // Printing process.env property value

// // Iterating through all returned data

//                ↓
// const process = require('process');
// var env = process.env;
// var no_env = 0;
// for (var key in env) {
     
// // Print value
// console.log(key + ":\t\t\t" + env[key]);
// no_env++;
// }
 
// // Printing count
// console.log("total no of values available = "
//             + no_env);
 