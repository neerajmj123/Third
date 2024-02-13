import React,{useState} from "react";
function Display({data}){
    return(
        <>
        <p>name : {data.name}</p>
        <p>email :{data.email}</p>
        </>
    )
}
export default Display