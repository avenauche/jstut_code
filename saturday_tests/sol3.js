function first(a, b) {

    this.a = a
    this.b = b

    return this
}

function second(c) {
    this.c = c
    return this
}


function third( cb ){
    var sum = this.a + this.b + this.c;
    cb(sum)
}


first(1,2).second(3).third((result) => console.log(result))




