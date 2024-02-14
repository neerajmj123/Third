import React,{useState} from "react";
function Login(){
    let [isLoggedin,setLoggedin] = useState(true)
    return(
        <>
        {
            isLoggedin?(<h1>Welcome user</h1>):(<h1>Please Login</h1>)
        }
        </>
    )
}
export default Login