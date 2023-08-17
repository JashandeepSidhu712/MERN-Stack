var array = [
    {name: "jashan", branch: "cse", per:90},
    {name: "karman", branch: "cse", per:50},
    {name: "sehaj", branch: "civil", per:80},
    {name: "bavneet", branch: "cse", per:60},
    {name: "khush", branch: "civil", per:70},
    {name: "amritpal", branch: "cse", per:75}
]

let names = array.map((obj)=>
{
    return obj.name;
})
console.log(names);

let pernames = array.map((obj)=>
{
    if(obj.per>70)
    return obj.name;
})
console.log(pernames);