import React from "react";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Nav from "./Nav";
function Home(){
    return <h2>Home</h2>
}
function About(){
    return <h2>About Page</h2>
}
function BasicRouting(){
    return(
        <>
        <Router>
            <div>
                {/* <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                    </ul>
                </nav> */}
                <Routes>
                    <Route path="/" exact element={<Nav/>}></Route>
                    <Route path='/home' exact element={<Home/>}/>
                    <Route path ='/about' exact element={<About/>}/>
                </Routes>
            </div>
        </Router>
        </>
    )
}
export default BasicRouting