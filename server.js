const express = require('express');
const port = 3000;
const app = express();
let fib = []; // Initialize array
let calculating = 0

app.get('/:tagId', function(req, res) {
    let num = Number(req.params.tagId); // ger number from url

    function check() { //function for checking if num already in array
        if (num < fib.length) {
            console.log(fib[num],"rezultat") //print when num in array
        } else if (calculating === 0) {
            fibonacci(fib.length) //if  no result start calculating from last num
        } else {
            setTimeout(check, 3000) //check again after 3 sec
        }
    }

    function fibonacci(i) {
        fib[0] = 1; //first 2 of fibonacci
        fib[1] = 1;
        calculating = 1;
        fib[i] = fib[i - 2] + fib[i - 1]; //sum last numbers
        i++;

        if (i <= num) {
            console.log(i, "člen izračunan")
            setTimeout(fibonacci, 3000, i); //call fibonacci again if num bigger
        } else {
            console.log(fib[num], "rezultat");
            calculating = 0 //print result
        }
    }
    if (calculating === 0) {
        fib = [];
        fibonacci(2) //if not calculating trigger it
    } else {
        check()
    }

})
app.listen(port, function() {
    console.log("Server running on localhost:" + port);
})