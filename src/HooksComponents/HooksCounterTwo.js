import React from 'react'
import { useState } from 'react/cjs/react.development'

function HooksCounterTwo() {
    const intialCount =0
    const [count,setCount]=useState(intialCount)

    const incrementFive =()=>{
        for(let i= 0;i<5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }
    return (
        <div>
            Count :{count}
            <button onClick={()=>setCount(intialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>{setCount(prevCount=>prevCount-1)}}>Decrement</button>
            <button onClick={incrementFive}>INCREMENT FIVE</button>
        </div>
    )
}

export default HooksCounterTwo
