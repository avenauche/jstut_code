var a = [1,2,3];


var available = a.find( (e) => {

   return (e == 2)


})


console.log(available)



var appSupportedVersions = [
    {"ios": 10 },
    {"android":[10, 20, 23]}, 
    {"android":[10, 21, 23]}, 
    {"ios": [1,2,3]}
]


const version = appSupportedVersions.find((obj)  =>  {  return obj.android && obj.android.indexOf(20)   })
console.log(version)





var arr1 = Array.from([1,2,4])
console.log(arr1)


arr1.push(3);
console.log(arr1)



var newarr = new Array(1,2,3)

console.log("newarr : ", newarr)


// var Obj = {
//     android : ["10", "20"]
// }

// var mappedObj = new Map(Obj)
// console.log(mappedObj.entries())

// var newArr2 = Array.from();
// console.log("newArr2: ", newArr2)






var names = ["AVENAUCHE", "PRATIKA", "SOPHIE"]

var lowercase_names = names.map((v, i, arr) => {
    return v.toLowerCase();
})

console.log("names: ", names)
console.log("lowercase_names: ", lowercase_names)



var names = [
    ["saurav", "ganguly"],
    ["sachin", "tendulkar"]
]




var fullname  = names.reduce((prev, curr, arr) => {
    
    
    
    prev.push(curr.join(" "))
    return prev;

}, [])


console.log(fullname)






var car_names = ["polo", "sedan"]

var reduced_car_names = car_names.reduce((prev, curr, arr)=>{

    curr  = prev+" "+curr;
    return curr;

}, "")

console.log(reduced_car_names)






var input = [1,2,3,4,5,6,7,8,9,10]

var sum = input.reduce((prev, curr, arr) => {  

    prev  = prev + curr
    return prev;



  }, 0)



  console.log("sum: ", sum)





