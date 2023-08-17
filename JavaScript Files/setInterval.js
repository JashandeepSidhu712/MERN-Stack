const fxn=()=>
{
    console.log("me");
}

const ref = setInterval(fxn,1000);

setTimeout(()=>{
    clearInterval(ref);
},10000);

const clock=(text)=>
{
    let date = new Date();

    let time = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

    console.log(text+" "+time);
}

const ref2 = setInterval(clock, 10000, "Time");

setTimeout(()=>{
    clearInterval(ref2);
},1000000);