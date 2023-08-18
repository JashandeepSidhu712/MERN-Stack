var array = [
    {name: "jashan", branch: "cse", per:90},
    {name: "karman", branch: "cse", per:50},
    {name: "sehaj", branch: "civil", per:80},
    {name: "bavneet", branch: "cse", per:60},
    {name: "khush", branch: "civil", per:70},
    {name: "amritpal", branch: "cse", per:75}
]

const allbranches = array.map((obj)=>
{
    return obj.branch;
})
console.log(allbranches);

const uniqueSet = new Set(array.map((obj)=>obj.branch));
console.log(uniqueSet);

const unique = [... new Set(array.map((obj)=>obj.branch))];
console.log(unique);

// /another way of doing it

var uniquEle = new Set(allbranches);
var ans = [... uniquEle];
console.log(ans);