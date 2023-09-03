# useEffect()
The Effect Hook lets you perform side effects in function components.

By using this Hook, you tell React that **your component needs to do something after render**.  <br>
React will **remember the function you passed** (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.

## By default, it runs both after the first render and after every update.
The code inside the useEffect() function runs after the initial render and after every subsequent render.

## SYNTAX OF useEffect():
The useEffect() function takes two arguments: <br>
a function that contains the code to run when the effect occurs,<br>
and an optional array of dependencies.

## USE EFFECT CODE

```
import React, {useEffect, useState} from 'react'

function UseEffect1() 
{

    const [fn, setFn] = useState("FN");
    const [ln, setLn] = useState("LN");

    useEffect(()=>
    {
        console.log(fn+" "+ln);
    })

    const updateFn=(event)=>
    {
        setFn(event.target.value);
    }

    const updateLn=(event)=>
    {
        setLn(event.target.value);
    }

    return (
        <div>
            <center>
                <p>
                    First Name: <input type="text" value={fn} onChange={updateFn} />
                </p>
                <p>
                    Last Name: <input type="text" value={ln} onChange={updateLn} />
                </p>
            </center>
        </div>
    )

}

export default UseEffect1;
```

![image](https://github.com/JashandeepSidhu712/MERN-Stack/assets/117754690/5026ba03-be9e-4013-8feb-f2edba5715e3)

**After Action** <br>
![image](https://github.com/JashandeepSidhu712/MERN-Stack/assets/117754690/61147924-652b-4d16-8f23-3c64a358b905)


## HOW IT WORKS

### 1. without a dependency array
it runs after the initial render and after every subsequent render. 
 
In given case, the effect logs the values of fn and ln to the console, and since it has no dependencies specified, it runs on every render cycle, even if there's no specific action that triggers it.

```
 useEffect(()=>
    {
        console.log(fn+" "+ln);
    })
```

![image](https://github.com/JashandeepSidhu712/MERN-Stack/assets/117754690/9b16982e-fb84-417d-9975-c6d252d447b7)

### 2. With dependency array and No arguments

```
useEffect(()=>
    {
        console.log(fn+" "+ln);
    },[])
```

![image](https://github.com/JashandeepSidhu712/MERN-Stack/assets/117754690/cc2238f2-a6a7-40eb-93a7-745c92fe3384)

### 3. With dependency array and With Arguments

```
useEffect(()=>
    {
        console.log(fn+" "+ln);
    },[fn])
```

![image](https://github.com/JashandeepSidhu712/MERN-Stack/assets/117754690/4575800a-ff4c-4665-b547-79950c7c13f3)

