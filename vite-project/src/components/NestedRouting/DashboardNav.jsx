import { Link } from "react-router-dom";
function DashboardNav(){
    return(
        <>
        <ul>
            <li><Link to='/dashboard/profile'>Profile</Link></li>
            <li><Link to='/dashboard/settings'>Settings</Link></li>

        </ul>
        </>
    )
}
export default DashboardNav;