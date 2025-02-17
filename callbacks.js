(function(a, b, result){

    c = a+b;
    result(c)

})(1,2, function(c){

    // do whatever 



    console.log("c: ", c )
})


// add(1,2, function(c){


//     console.log("c : ", c+1)

// })



function multiply(a, b, result){

    var output = a*b

    result(output)

}


multiply( 1, 5, (output) => console.log(' 1 x 5 = ', output)  )



