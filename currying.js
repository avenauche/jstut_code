function add(a, b){

    this.sum = a + b;

    return this;
}


function addMore(c){
    this.sum += c;

    // sum = sum+c

    console.log(this.sum)
    return this;
}

add(1,2).addMore(3)
