// 2. write a closure to add N numbers, and curry the adding function to accept every input number. use variables of appropriate scopes and use relevant datastructures to hold values. The final output must be shareable among the curried functions. use spread operators, destructuring and rest parameters while passing the inputs to the functions. the input must only be supplied from scope external to the closure and adding must be within the closure 


// 1. closure fn ( pass inputs ) 
// 2. add -> curry 
// 3. this.output

(function (...numbers){

    this.out = 0;

    function add(n){
        this.out += n;
        return this
    }

    numbers.forEach((n) => {
        add(n)
    })

    console.log(this.out)

})(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
