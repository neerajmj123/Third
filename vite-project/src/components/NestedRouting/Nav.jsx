import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
function Nav(){
    return (
        <>
        <nav>
            <ul>
                <li> <Link to ='/home'>Home</Link></li>
                <li> <Link to ='/dashboard'>Dashboard</Link></li>
            </ul>
        </nav>
        </>
    )
}
export default Nav