//Loop through all numbers from 1 to 100.
//If a number is divisible by 3, log “Fizz.”
//If a number is divisible by 5, log “Buzz.”
//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
//If a number is not divisible by either 3 or 5, log the number.

/*let n = 8;

if (n % 3 === 0 && n % 5 === 0){
    console.log("Fizz Buzz")
}
else if (n % 5 === 0){
    console.log("Buzz")
}
else if (n % 3 === 0){
    console.log("Fizz")
}
else {
    console.log(n)
}


for (let n = 1; n <= 100; n++){
    console.log("n=", n)    
}
    */
function divisible (){
    for (let n = 1; n <= 100; n++){
        /*console.log("n=", n)*/
        if (n % 3 === 0 && n % 5 === 0){
            console.log("Fizz Buzz")
        }
        else if (n % 5 === 0){
            console.log("Buzz")
        }
        else if (n % 3 === 0){
            console.log("Fizz")
        }
        else {
            console.log(n)
        }    
    }
    console.log("i work")
}
divisible();