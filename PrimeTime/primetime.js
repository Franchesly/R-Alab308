//Declare an arbitrary number, n.
//Create a loop that searches for the next prime number, starting at n and incrementing from there.
//As soon as you find the prime number, log that number and exit the loop.


function primenumber (){
    for(let n = 1; n <= 100; n++){
       
        if (!(n % 2 === 0 || n % 3 === 0 || n % 5 === 0)){
            console.log("n", n)
        }
    }

    console.log("i work")
}

 /*   for(let n = ){
        console.log()
}
        let n = 1; n <= 100; n++
        else if (){
            console.log()
}
        else if (){
            console.log()
}
        else{
            console.log()
}*/

primenumber ();