var a = 2;

var b = "avinash"

var c = 'bhuvanesh'


var d = true

var e = false

var q = undefined;


//number => Number()
//string => String()
//BigInt =>  




var car = {

    type: "",
    maker: "",
    color: "red",


    drive: () => {return 1},
    stop: () => { return 0 },
    reverse: () => { return -1 },
    breakdown: () => {
        return null;
    }

}

var Cars = function() {

    let type="";
    let color="red";
    let maker = "";


    let drive = function drive(){ return 1 }

    let stop = () => { return 0 }

    let reverse = function() { return -1 }

}


let car = new Cars();

    car.type = "sedan"
    car.maker = "vw";

    car.drive()




class Truck {

    type;
    color;
    make;

    drive(){
        return 1; 
    }

    stop() {
        return 0;
    }

    reverse(){
        return -1;
    }

    honk() {
        return "honking";
    }

}


let truck = new Truck();

truck.honk()


