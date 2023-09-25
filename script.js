//  1

let array = [2, 8, -9, 15, -6, -95, -60, 63, 52, 48, 95, 62];


let filterArray = array.filter((posNum) => posNum > 0);
let initialValue = 0;
let initialSum = filterArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(initialSum);


// 3 

function addAsync(paramOne, paramTwo) {
    new Promise((resolve, reject) => {
        if (typeof paramOne == "number" && typeof paramTwo == "number") {
            resolve("addAsync are numbers")
        }
        else {
            reject("error")
        }
    })
        .then((val) => console.log(val))
        .catch((error) => console.log(error));
}
addAsync(5, 9);
addAsync('string', 5);