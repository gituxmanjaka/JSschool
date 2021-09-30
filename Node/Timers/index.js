/** Set timeout */
// setTimeout() can be used to schedule code execution after a designated amount of milliseconds.

// function myFunc(arg) {
//     console.log(`arg was => ${arg}`);
//     console.log("inside timeout");
// }

// console.log("Before set timeout");
// var timeOutObject = setTimeout(myFunc, 5000, 'Executed after 5 sec');
// console.log("After set timeout");


// The output ->
// Before set timeout
// After set timeout
// arg was => Executed after 5 sec
// inside timeout
// The raison why "before timeout" is executed before "args" and "inside", is the
// setTimeout is asynchronously called (don't block any processus)


/** setInterval */


const wait = (delai) => {
    let count = 1;
    function intervalFunc() {
        if (count === delai) {
            clearInterval(interval);
        }
        console.log(`${count}sec...`);
        count++;
    }
    console.log(`Wait in ${delai}seconds`);
    const interval = setInterval(intervalFunc, 1000); // run every 1 sec
}

let moment = 5;
console.log("Executed immediatly");
wait(moment); // wait 3 sec
console.log(`Normaly, it will be executed after ${moment} second`);

// The output ->
// Executed immediatly
// Wait in 5seconds
// Normaly, it will be executed after 5 second
// 1sec...
// 2sec...
// 3sec...
// 4sec...
// 5sec...
// The same raison with setTimeout: it is asynchronously called (don't block any processus)


/** Comparaison between setTimeout and setInterval */
// setTimeout: execute a function after the delai
// setInterval: execute a function every the delai