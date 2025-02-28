console.log("worker thread")

const threadName = "worker" 




//es6 export
// export default threadName;

// commonjs
// module.exports = threadName;



self.onmessage = ( (e) => {

    switch(e.data) {

        case "start":
            // console.log(e)
            console.log("worker thread started running the task")
            
            self.postMessage("end")
        break;


    }
   
})