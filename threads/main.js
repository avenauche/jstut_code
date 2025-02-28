// es6 import
// import threadName from "./worker.js";


// commonjs
// var threadName = require("./worker.js");


console.log("main thread")
// console.log(threadName)







const worker = new Worker("./worker.js")

worker.postMessage("start");


worker.addEventListener("message", (e) => {
    switch(e.data){
        case "end": 
            console.log("task ended");
        break;
    }
})





