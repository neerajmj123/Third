import React ,{useState} from "react";

function Login({}){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleLogin = async (e)=>{
        e.preventDefault();
        try {
            const user = await loginUser(email, password);
            onLogin(user);
        } catch (error) {
            console.error('Login error:', error);
        }
    }
    return(
        <>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email"/>
        <input type="email" value={password} onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password"/>
        <button type="submit">Login</button>
        </form>
        </>
    )

}
export default Login