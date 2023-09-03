import React, { useEffect, useState } from 'react'

function CountingChars1() 
{
    const [data, setData] = useState("");

    const updateData=(event)=>
    {
        const newData = event.target.value;
        setData(newData);

        const remaining = 20-newData.length;
        setLeft(remaining);
    }

    const [left, setLeft] = useState(20);

    return (
        
        <div>

            <center>
            <hr />
            <h5>COUNTING CHARACTERS WITHOUT USEEFFECT()</h5>
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

export default CountingChars1
