// console.log(globalThis)


function add(){
    console.log("this: ",this)
}

// add();

class Car {

    name="vento"
    color="black"
    make=2015
    maker="vw"

    constructor(){
        console.log("car: ",this)
    }

}

var myCar = new Car()


var myPhone = {

    color:"",
    make:"",

    //getter , setter
    setColor: function(color){
        this.color = color
    },

    getColor: function(){

        console.log("getcolor: ", this)
        return this.color;
    }

}


myPhone.setColor("red");
let color = myPhone.getColor()
console.log(color)

