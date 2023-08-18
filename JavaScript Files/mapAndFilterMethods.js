var array = [
    {name: "jashan", branch: "cse", per:90},
    {name: "karman", branch: "cse", per:50},
    {name: "sehaj", branch: "civil", per:80},
    {name: "bavneet", branch: "cse", per:60},
    {name: "khush", branch: "civil", per:70},
    {name: "amritpal", branch: "cse", per:75}
]

/// MAP

// let names = array.map((obj)=>
// {
//     return obj.name;
// })
// console.log(names);

// let pernames = array.map((obj)=>
// {
//     if(obj.per>70)
//     return obj.name;
// })
// console.log(pernames);

// let whole = array.map((obj)=>
// {
//     if(obj.per>70)
//     return obj;
// })
// console.log(whole);

// FILTER

let perobj = array.filter((obj)=>
{
    return obj.per>70;
})
console.log(perobj);


//NESTED FILTERING

let namesperobj = array.filter((obj)=>
{
    return obj.per>70;
}).filter((obj)=>obj.branch=="cse");
console.log(namesperobj);

// COMPARE 

const compare=(prop)=>
{
    return function(obj1,obj2)
    {
        if(obj1[prop]>obj2[prop])
        return 1;
        else if(obj1[prop]<obj2[prop])
        return -1;
        else
        return 0;
    }
}
const sortedarray = array.sort(compare("name"));
console.log(sortedarray);

var names = ["jashan","deep","kaur"];
console.log(names.join(","));