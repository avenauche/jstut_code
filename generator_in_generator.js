function* g1(){


    yield 1;
    yield* g2()
}




function* g2(){

    yield 2
}



var a = g1()
console.log(a.next().value);
console.log(a.next().value)