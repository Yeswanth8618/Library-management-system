import '../styles/Landingpage.css'
import {Link} from "react-router-dom"
const Landingpage = () => {
    return ( 
        <div className="landingpage">
        <h1 style={{color:"violet"}}>Library Management System</h1>
        <div className="link">
        <Link to="/admin"><img src="https://cdn.icon-icons.com/icons2/35/PNG/96/admin_person_user_man_2839.png" alt="" /><h1 style={{color:"#51e2f5"}}>admin</h1></Link>
        <Link to="/user"><img src="https://cdn.icon-icons.com/icons2/20/PNG/96/business_man_usersearch_thesearch_theclient_2356.png" alt="" /><h1 style={{color:"#51e2f5"}}>user</h1></Link>
        </div>
        </div>
     );
}
 
export default Landingpage;