//The rest operator puts the rest of some specific user-supplied values into a JavaScript array

function nums(...arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        const element = arr[i];
        result += element;
    }

    return result;
}
console.log(nums(1, 2, 3, 4, 5));

const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); 
console.log(b); 
console.log(rest); 

//The spread operator expands iterables into individual elements.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6, 7, 8, 9, 10];
console.log(arr2);

function returnSum(a, b, c){
    return a + b + c;
}
console.log(returnSum(...arr1));

const obj1 = { one: 1, two: 2, three: 3 };
const obj2 = { ...obj1, four: 4 };
console.log(obj2); 