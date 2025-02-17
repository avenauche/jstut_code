// // for(var a=0;;){
// //     console.log("a: ", a)
// // }


// var a = 0;

// while(a<10){
//     console.log("a: ", a)
//     a++;
// }


var i=0;
do {

    // console.log("do-while: ", i)
    i++;

} while(i<3)



// while(true){
    // console.log("run forever")
// }


// foreach()
// each()


// var arr = [1,2,3]


// arr.forEach((a) => console.log(a))




var obj = {
    "a":"1",
    "b": "avinash",
    "c": 123,
    "drive": function(){  return "driving" }
}



var entries = Object.entries(obj)
var values = Object.values(obj)
var keys = Object.keys(obj)

// console.log(entries)
// console.log(keys)
// console.log(values)


for(var i=0; i<Object.values(obj).length; i++){

    var key = Object.keys(obj)[i];


    // console.log("i : ", i)
    // console.log("key : ", key)
    // console.log( "value: ", obj[key] )

}


var secondObj = Object.fromEntries(entries)
// console.log('secondObj: ', secondObj);


var thirdObj = {}

for(var i=0; i<keys.length; i++){
    var key = keys[i]
    var value = values[i]

    thirdObj[key] = value
}
console.log(thirdObj)



