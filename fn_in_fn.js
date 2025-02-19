function add(a,b){
    return function(c){
        return function (d){
            return a+b+c+d;
        }
    }
}



// var addMore = add(1,2);
// var addSomeMore = addMore(3);
// var result = addSomeMore(4);



var result = add(1,2)(3)(5)
console.log(result)



var add = (a,b) => (c) => (d) => a+b+c+d;

console.log(add(10,20)(30)(40))





var arr1 = [1,2,3]
var arr2 = [4,5,6]


var resultArr = arr1.concat(arr2)
console.log(resultArr)


console.log([ ...arr1, ...arr2])


var fname = "avenauche"
var lname = "jeyasooriya"

console.log( ...fname, ...lname  )


var obj1 = { "a": "A", "b":"B" }
var obj2 = { "c": "C", "d":"D" }


console.log(  { ...obj1, ...obj2} )

console.log(Object.assign({}, obj1, obj2))

