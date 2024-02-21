import { useEffect, useState } from "react";
import './UseEffect.css';
function UseEffectComponent1(){
    const [data,setData] = useState('');
    useEffect(()=>{
        const fethData = ()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((user) =>user.json())
            .then((user) =>setData(user))
            .catch((error)=>{
                console.log("Error fetching Data" ,error)
            })
        }
        fethData()
    },[])
    return(
        <>
        {data ? (data.map((user) =>{
            return(
                <div className="box" key={user.id}>
                    <h3>Id:{user.id}</h3>
                    <h3>Name:{user.name}</h3>
                    <h3>Username :{user.username}</h3>
                </div>
            )
        })):(<h1>Loading......</h1>)}
        </>
    )
}
export default UseEffectComponent1;