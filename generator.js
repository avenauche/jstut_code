function* values(){


    yield 1
    yield 2
    yield 3

} 


var a = values()

console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);


for( var a of  values() ){
    console.log(a)
}




