import React from "react";
const Child = React.memo(({handleClick})=>{
    return(
        <>
        <button onClick={handleClick}>Increment</button>
        </>
    )
})
export default Child