// --------------------In CommonJs-----------------------------------------------------
// const lib=require("./lib.js")
// console.log((lib.sum(4,5)),lib.diff(5,4));  //run node index.js in terminal to run

// ------------------- In ES6-------------------------------------------------------

import {sum,diff} from './lib.js';

console.log((sum(4,5)),diff(5,4));  