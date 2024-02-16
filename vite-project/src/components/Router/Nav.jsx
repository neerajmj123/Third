import React from "react";
import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";

function Home(){
    return <h2>Home</h2>
}
function About(){
    return <h2>About</h2>
}
function Nav(){
    return(
        <>
        <div>
            <nav>
                <ul>
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>
            </nav>
        </div>
        </>
    )
}
export default Nav;