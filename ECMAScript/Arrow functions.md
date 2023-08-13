# ARROW FUNCTION
Arrow functions, introduced in ECMAScript 6 (ES6), provide a more concise syntax for creating functions in JavaScript. They are often used for shorter, inline functions and have some unique characteristics compared to traditional function expressions.


### Traditional function
```
const sum=function(aa,bb)
{
    ans = aa+bb;
    console.log(ans);
}
sum(1,2); //3
```

### Arrow function

#### multiple lines
```
const sum2=(aa,bb)=>
{
    ans = aa+bb;
    console.log(ans);
}
sum2(1,2); //3
```

```
const multi=(a,b)=>
{
    sum = a+b;
    return sum;
}
console.log(multi(1,3));
```

#### single line
```
const single=(a,b)=> a+b;
console.log(single(1,2));
```
