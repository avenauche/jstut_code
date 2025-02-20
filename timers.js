
var count = 0;
// var intervalHandle = setInterval( () => {
//     if(count==5){
//         clearInterval(intervalHandle)
//     }else{
//         console.log(`running every 2 seconds, count is : ${count} `)
//         count++;
//     }
// }, 0);



for(var i=0; i<5; i++){
    (function (count){
        const intervalHandle = setInterval(function(){
                console.log(`running every 2 seconds, count is : ${count} `)
                clearInterval(intervalHandle)
        }, 0)

    })(i)
}

// setTimeout( () => {
//     console.log("delayed by 5 sec")
// }, 5000)







