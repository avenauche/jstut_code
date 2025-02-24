var add = (a,b) => (c) => (sum) => {
    var result = a+b+c;   
    sum(result)
}

add(1,2)(3)((result) => console.log(result))



