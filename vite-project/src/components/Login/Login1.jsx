import React,{useState} from "react";
function Login1(){
    let [isLoggedin,setLoggedin]=useState(false)
    let content;
    if(isLoggedin){
        content = <h1>Welcome,user!</h1>
    }else{
        content = <h1>Please Login</h1>
    }
    return(
        <>
        {content}
        </>
    )
}
export default Login1