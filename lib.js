// -------------------------------In CommonJs 1-----------------------------------------------------
// function sum(a,b){
//     return a-b
// }

// exports.sum=sum

// -------------------------In CommonJs 2-----------------------------------------------------

// exports.sum= (a,b)=>{
//     return a+b
// }

// exports.diff= (a,b)=>{
//     return a-b
// }

// ----------------------------In ES6--------------------------------------------------------

const sum=(a,b)=>{
    return a+b
}

const diff=(a,b)=>{
    return a-b
}

export {sum,diff}   //object shortHand