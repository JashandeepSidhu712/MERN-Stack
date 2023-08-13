# VARIABLE LENGTH ARGUMENTS
Variable-length arguments, also known as **variadic arguments or varargs**, allow a function to **accept an arbitrary number of arguments**, regardless of how many arguments were defined in the function's parameter list.


## Using the arguments Object
In JavaScript, functions have access to a **special object called the arguments object**. It **holds all the arguments passed to the function**, **even if they are not explicitly defined in the function's parameter list**.

However, using the arguments object has some limitations, such as not being an actual array (it's an array-like object) and not supporting modern array methods.

## The ... syntax, known as the "spread/rest" operator

### Rest Parameter
The rest parameter is used in function declarations to collect multiple arguments into a single array parameter. This is particularly useful when dealing with functions that accept a variable number of arguments.

They allow you to capture all remaining arguments into a single array parameter.

#### using loops

```
let args = (... array)=>
{
    for(i=0;i<array.length;i++)
    console.log(array[i]);
}
args(1,2,3,4,5,6,7,8,9);
```

#### using forEach
The forEach method is a built-in JavaScript function that is used to iterate over the elements of an array and execute a provided function once for each element. 

It's a convenient way to perform an operation on each element of an array without the need for writing a traditional for loop.

SYNTAX
```
array.forEach(function(currentValue, index, array) {
    // Code to be executed for each element
});
```

**currentValue**: The current element being processed in the array. <br>
**index**: The index of the current element in the array. <br>
**array**: The array on which forEach is being called. <br>

```
let args2 = (... array)=>
{

    console.log("using foreach");
    array.forEach(function(value, index){
        console.log(value+" "+index);
    })
}
args2(1,2,3,4,5,6,7,8,9);
```
