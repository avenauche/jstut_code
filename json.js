var car  = {}

car.name = "vento"
car.year = 2015
car.registered =  true
car.mirror = [ "left", "right" ],
car.interior = {  display:"touch", audio: "harman"   }
car.wheels = new Map([ ["left front", "right front"], [ "left rear", "right rear"] ])

console.log("car")
console.log(car)


var jsonCar = JSON.stringify(car, null, 4)
console.log("jsonCar")
console.log(jsonCar)




var newcar = {
    name: "virtus",
    year: 2024, 
    registered: true, 
    wheels: ["front", "rear"],
    interior : {  display:"touch", audio: "harman"   }
}


console.log("newcar")
console.log(newcar);

var jsonNewCar = JSON.stringify(newcar) /// POST http://weather.com/chennai?pincode=600001
console.log(jsonNewCar)




var parsedCar = JSON.parse(jsonNewCar);

console.log("parsed car")
console.log(parsedCar)

console.log( typeof parsedCar )