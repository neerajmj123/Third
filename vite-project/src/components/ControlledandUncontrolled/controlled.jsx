import React,{useState} from "react";
function Controlled(){
    let [inputValue,setInputValue]= useState('')
    function handleInputChanage(e){
        setInputValue(e.target.value)
    }
    return(
        <>
        <input type="text" value={inputValue} onChange={handleInputChanage} />
        </>
    )
}
export default Controlled;