import { Link } from "react-router-dom";
import '../styles/AdminNavbar.css'
import img from './img.png'
const AdminNavbar = () => {
    return ( 
        <div className="adminnavbar">
            <div className="logo">
        <span><img src={img} alt="" /></span>
            </div>
            <div className="navlinks">
                <Link to='/admin'>HOME</Link>
             <Link to='/adminhome/viewlist'>VIEW LIST</Link>
             <Link to='/adminhome/addbooks'>ADD BOOKS</Link>
             <Link to='/adminhome/updatebooks'>UPDATE BOOKS</Link>
             <Link to='/'>LOGOUT</Link>
             </div>
        </div>
     );
}
 
export default AdminNavbar;