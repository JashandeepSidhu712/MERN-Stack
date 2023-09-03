import React, { useEffect, useState, useRef } from 'react'

function CountingChars2() 
{
    const [data, setData] = useState("");

    const updateData=(event)=>
    {
        setData(event.target.value);
    }

    const [left, setLeft] = useState(21);

    useEffect(()=>
    {
        setLeft(left-1);

    },[data])

    return (

        <div>
           <center>
           <hr />
            <h5>COUNTING CHARACTERS with useEffect()</h5>
                <p>
                    <input type="text" value={data} onChange={updateData} />
                </p>
                <p>
                    {left} characters remaining
                </p>
           </center>
        </div>

    )
}

export default CountingChars2
