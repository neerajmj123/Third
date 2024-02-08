import React,{useState} from "react";
function Input({onsubmit}){
    const [name,setName]= useState('');
    const onSubmit = (e) =>{
        e.preventDefault();
        onsubmit(name);
    }
    const handleInputChange = (e) =>{
        setName(e.target.value)
    }
    return(
        <>
        <form onSubmit ={onSubmit}>
            <input type="text" name="name" id="name"  placeholder="enter your name" onChange={handleInputChange}/>
            <input type="submit" />
        </form>
        </>
    )
}
export default Input