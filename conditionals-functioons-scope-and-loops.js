/*
 *Conditionals, Functions, Scope and Loops.
 */
/* this is step 1 of the video These are some of the conditionals for Boolean operations.

// equals: checks if two values are the same
let equals = 1 === 1;

console.log(equals);

// Greater than: checks if a value is larger than the other
let greaterThan = 5 > 1;

// Less than: if a value is smaller than another
let lessThan = 2 < 10;

//greater than equals
let greaterThanEq = 5 >= 5;

//Less than Equals
let lessThanEquals = 4 <= 9;

//not equals
let notEq = 5 !== 2;
*/
/* step 2


let storeA = 4.40;
let storeB = 4.40;

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price")
    } else {
        console.log("Their prices are equal.")
    }
}

//compareStorePrices (10, 5);
//compareStorePrices(7, 10);

//functions should be no longer than 20 lines of code.
function squareNum (number){
    let squared = number * number;
    return squared;
}

let squaredNumber = squareNum (4);
console.log(squaredNumber);

 */
/* step 3 was about the 3 levels of code.
let x = 10;
function addNumbers(n, m, x){
    console.log(x);
    let b;
    if (1===1){
      b = 7;
    }
    console.log(b)
    return n + m;
}

addNumbers(2, 3, 8);
console.log(x);
*/
/* step 4 arrays and loops
//           0  1  2  3  4
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length
for (let i = 0; i<arrLen; i++){
    //console.log("i is equal to " + [i])
    console.log(ourArray[i])

    for (let j = 0; j < 10; j++) {
        console.log("j is equal to " + j);
    }

}
*/
/* step 5 loop rules and while loops
let x =0;
while (x < 10) {
    console.log('Ran');
    x++;

 */
}