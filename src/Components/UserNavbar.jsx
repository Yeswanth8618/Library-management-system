import { Link } from "react-router-dom";
import '../styles/Usernavbar.css'
const UserNavbar = () => {
    return ( 
        <div className="usernavbar">
             {/* <div className="logo2">
        <span><img src={img} alt="" /></span>
            </div> */}
             <div className="navlinks2">
             <Link to='/userhome/viewlist'>VIEW LIST</Link>
             <Link to='/userhome/addbooks'>ADD BOOKS</Link>
             <Link to='/userhome/updatebooks'>UPDATE BOOKS</Link>
             <Link to='/'>LOGOUT</Link>
             </div>
        </div>
     );
}
 
export default UserNavbar;