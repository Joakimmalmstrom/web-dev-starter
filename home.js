// let welcome = "Welcome!",
//     name = "Hiking",
//     accountNumber = 4123321.32,
//     discounted = false;

// showMessage(welcome);
// let price = 10;

// let message = (price > 10) ? "expensive" : "cheap";
// console.log(message);

// for (let i = 0; i < 6; i++) 
// {
//     console.log(i);
// }


function hej()
{
    console.log("hej");
}
// User-input number
let inputNumber;
// User-input (not 3)
let bishNumber = 3;
// User-input (not 4)
let boshNumber = 4;

let bishString = "Bish";
let boshString = "Bosh";
let bishBoshString = "Bish-Bosh";

// Write out in index
for (let i = 1; i <= inputNumber; i++) {
    let bish = i % bishNumber;
    let bosh = i % boshNumber;

    if (bish === 0 && bosh === 0)
        console.log(bishBoshString);
    else if (bish === 0)
        console.log(bishString);
    else if (bosh === 0)
        console.log(boshString);
    else
        console.log(i);
}