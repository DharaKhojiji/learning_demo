import React, { useState,useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name,setName] =useState('');
  
  useEffect(()=>{
      console.log('useEffect -updateing the document title')
      document.title=`you clicked ${count} times`
  },[count])
 const  countHandler =()=>{
      setCount(count+1);
  }
  
  return (
    <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
      <button onClick={countHandler}>Click {count} times</button>
    </div>
  );
}

export default HookCounterOne;
