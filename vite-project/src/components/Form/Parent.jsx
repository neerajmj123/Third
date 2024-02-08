import React,{useState} from "react";
import Input from "./Input";
import Display from "./Display"

function Parent(){
    const [dataToDisplay,setDataToDisplay] = useState('')
    const handleSubmit = (data)=>{
        setDataToDisplay(data);
    }
    return(
        <>
        <Input onsubmit = {handleSubmit}/>
        <Display data = {dataToDisplay}/>
        </>
    )
}
export default Parent;