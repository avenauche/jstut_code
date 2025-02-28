var a = [1,2,3]
var b = [4,5,6]

var c = [  ...a, ...b   ]

console.log(...a)




// rest 


function stringConcat(...a){
    // console.log(s1)
    // console.log(s2)
    console.log(a)

    return a.join(",")


}


var final_string = stringConcat("hi", "hello", "learning js", "rest operator", "spread operator")
console.log(final_string)



var x = ["hello", "world", "from", "javascript"]

var [one, , ...remaining] = x;

console.log(one)
// console.log(two)
console.log(remaining)



var obj = {    
    "name" : "vento",
    "brand" : "vw",
    "year" : "2015",
    "color" : "pearl black"
}

const name = "avenauche";


const {name:carname, color, ...props} = obj

console.log(name)
console.log(carname)
console.log(color)
console.log(props)



// const brand = obj.brand
const {brand} = obj
console.log(brand)


const {engine} = obj
console.log(engine)



var arr = [ ["a",1], ["b", 2], ["c", 3]  ]


for(var [k,v] of arr){
    console.log(k)
    console.log(v)
}