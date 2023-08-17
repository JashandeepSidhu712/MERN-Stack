

let args = (... array)=>
{
    for(i=0;i<array.length;i++)
    console.log(array[i]);
}
// args(1,2,3,4,5,6,7,8,9);

let args2 = (... array)=>
{

    console.log("using foreach");
    array.forEach(function(value, index){
        console.log(value+" "+index);
    })
}
console.time();
// args2(1,2,3,4,5,6,7,8,9);
console.timeEnd();

const even = [];
let evenArgs = (... array)=>
{

    array.forEach(function(value, index){
        if(value%2==0)
        {
            // console.log(value+" "+index);
            even.push(value);
        }
        
    })
}
console.time();
evenArgs(1,2,3,4,5,6,7,8,9);
console.log("EVEN ARRAY VALUES");
console.log(even);
console.timeEnd();

console.log(even.pop());
console.log(even);

const numbers = [1, 2, 3, 4, 5];
const removedNumber = numbers.shift(); //pop from beg

console.log(removedNumber); // Output: 1 (removed element)
console.log(numbers); // Output: [2, 3, 4, 5]

const newLength = numbers.unshift(1); //insert at begin

console.log(newLength); // Output: 5 (new length of the array)
console.log(numbers); // Output: [1, 2, 3, 4, 5]

