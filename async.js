function task1() {
    const promise1 = new Promise((resolve, reject) => {

        setTimeout( () => {
            resolve("task 1 completed")
        }, 5000 )

    })
        
    return promise1

}



async function task2() {
    const promise2 = new Promise((resolve, reject) => {

        setTimeout( () => {
            resolve("task 2 completed")
        }, 15000 )

    })
        
    return promise2

   
}



// const task1_output = task1()
// task1_output.then((val) => console.log(val))

function main(){

    (async ()=>{

        const task1_output = task1()
        task1_output.then((val) => console.log(val))
        
        console.log("hello world")

        

        const task2_output = await task2();
        console.log(task2_output)

        console.log("hello")
    
    })()


   
}

main()