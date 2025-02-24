const task1 = new Promise((resolve, reject)=>{

    // setTimeout(function(){
    //     resolve( " task 1 " )
    // }, 5000)

    resolve("task 1")
    // reject("promise failed");

})
.then((promiseValue) => {
    console.log(`promiseValue : ${promiseValue}`) 
    return promiseValue;
})
.catch((error) => console.log("promise error: ", error))
// .finally(()=> console.log("end of promise") )



const task2 = new Promise((resolve, reject) => {


    setTimeout(function(){
        resolve( " task 2 " )
    }, 3000)

    // reject("rejecting task 2")

}).then((promiseValue) => {
    console.log(promiseValue); 
    return promiseValue;
})





const promiseAll = Promise.all([ task1, task2 ])
.then((promises)=> console.log(promises))
.catch((error) => console.log(error))

// const promiseAny = Promise.any([task1, task2])
// .then((promises) => console.log(promises))
// .catch((error) => console.log(error))


