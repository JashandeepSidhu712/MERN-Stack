///// let, var variable declarations

// var global = 10;
function variables()
{
    var sum = 0;
    // var i;
    
    for(i=0;i<3;i++)
    {
        sum+=i;
        var index = i;
    }

    console.log("sum="+sum+" global="+global+" index="+index);
}
// variables();

///// let variable ///////////
let global = 10;
function variablesLet()
{
    let sum = 0;
    
    for(i=0;i<3;i++)
    {
        sum+=i;
        let index = i;
    }

    console.log("sum="+sum+" global="+global+" index="+index);
}
// variablesLet();

/////////////////// const ////////////

const aconst = 10;
// aconst = 20;
// console.log(aconst);

const pro=function(p,q)
{
    ans = p*q;
    console.log(ans);
}
// pro(1,2);
ans=10;
// pro(1,3);
console.log(ans);

const product=function(p,q)
{
    ans = p*q;
    console.log(ans);
}
// product(1,2);

const product2=function(p,q)
{
    product.ans = p*q;
    console.log(product.ans);
}
// product2(1,2);

////////////////////////// ARROW FUNCTION 

//traditional function

const summ=function(aa,bb)
{
    ans = aa+bb;
    console.log(ans);
}
// summ(1,2);

// arrow function in multiple lines

const sum2=(aa,bb)=>
{
    ans = aa+bb;
    console.log(ans);
}
// sum2(1,2);

// arrow function of single line

const single=(a,b)=> a+b;
console.log(single(1,2));

// return of multiple lines
const multi=(a,b)=>
{
    sum = a+b;
    return sum;
}
// console.log(multi(1,3));

// single parameter

const sqr=s=> s*s;
console.log(sqr(10));

(() => {
    const message = "Hello from IIFE!";
    console.log(message);
})();

(function message()
{
    const message = "Hello from IIFE!";
    console.log(message);
})();

const sum=()=>
{
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10
