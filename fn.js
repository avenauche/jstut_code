//IIFE --> immediately invoked function expression

(function(){
    console.log('log from IIFE')
})()


// named function
function add(){
    //body

    return 1+2

}
console.log( add() )



// function expression
var a = function (){
    return 2+3;
}

console.log(a())



// arrow function
var b = () => {  return 2+4 }
console.log(b())



// var a = (b) => b;


// fn reuse 
function add2(a,b){
    return a+b;
}



console.log( add2(1, 5) )
console.log( add2(100, 500) )

