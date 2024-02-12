import React,{useState} from "react";

function Signup(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSignup = async (e)=>{
        e.preventDefault()

    }

    return(
        <>
        <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Signup</button>
      </form>
        </>
    )

}
export default Signup;