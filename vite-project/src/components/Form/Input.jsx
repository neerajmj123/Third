import React,{useState} from "react";
function Input({onsubmit}){
    const [data,setData]= useState({
        name :'',
        email :'',
    });
    const onSubmit = (e) =>{
        e.preventDefault();
        onsubmit(data);
    }
    const handleInputChange = (e) =>{

        if(e.target.name === "name"){
            setData({
                ...data,
                name : e.target.value,
            })
        }
        if(e.target.name === "email"){
            setData({
                ...data,
                email: e.target.value,
            })
        }
    }
    return(
        <>
        <form onSubmit ={onSubmit}>
            <input type="text" name="name"   placeholder="enter your name" onChange={handleInputChange}/>
            <input type="text" name="email"  placeholder="enter your email" onChange={handleInputChange}/>

            <input type="submit" />
        </form>
        </>
    )
}
export default Input