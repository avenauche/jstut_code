
var sum = 0;
function* add(input){
    sum = sum+input;
    yield sum;
}



for(var i=1; i<5; i++){
    console.log(add(i).next().value)
}