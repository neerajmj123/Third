import LandingNavbar from "./Navbar/LandingNavbar"
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
// import Login from '../Login/Login'
import Footer from "./Footer/Footer"
function Landing(){


    return(
        <>
        <LandingNavbar/>
        {/* <Login/> */}
        <Router>
        <Routes>
            <Route path="/login" exact element ={<Login/>}/>
        </Routes>
        </Router>
        <Footer/>
        </>
    )
}
export default Landing