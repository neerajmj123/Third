import React, { useCallback, useState } from "react";
import Child from "./Child";
function Parent(){
    const [count,setCount]=useState(0);
    const handleClick = useCallback(()=>{
        setCount(prevCount=>prevCount+1);
    },[]);
    return(
        <>
        <p>Count :{count}</p>
        <Child handleClick={handleClick} />
        </>
    )
}
export default Parent;