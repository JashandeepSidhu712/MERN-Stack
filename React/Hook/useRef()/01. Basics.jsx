import React, { useEffect, useState, useRef } from 'react'

function UseRef1() 
{
    const [data, setData] = useState("");

    const updateData=(event)=>
    {
        setData(event.target.value);
    }

    const textRef = useRef();

    const [left, setLeft] = useState(21);

    useEffect(()=>
    {
        textRef.current.focus();
        textRef.current.style.Border='1px solid red';
    },[])

    useEffect(()=>
    {
        setLeft(left-1);

        if(left==1)
        {
            textRef.current.disabled=true;
        }
    },[data])

    return (

        <div>
           <center>
            <hr />
            <h5>USE REFENCE</h5>
                <p>
                    <input type="text" value={data} onChange={updateData} ref={textRef} />
                </p>
                <p>
                    {left} characters remaining
                </p>
           </center>
        </div>

    )
}

export default UseRef1
