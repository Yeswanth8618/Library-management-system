import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import AdminNavbar from "./AdminNavbar";
import ViewList from "./ViewList";
import '../styles/Adminhome.css'
import AddBooks from "./AddBooks";
import UpdateBooks from "./UpdateBooks";
import ReadBooks from "./ReadBooks";

const Adminhome = () => {
    return ( 
        <div className="adminhome">
         <AdminNavbar/>
         <Routes>
            <Route path="/viewlist" element={<ViewList/>}/>
             <Route path="/addbooks" element={<AddBooks/>}/>
             <Route path="/updatebooks/:id" element={<UpdateBooks/>}/>
            <Route path='/' element={<AdminDashboard/>}/>
            <Route path="/viewlist/:id" element={<ReadBooks/>}/>
         </Routes>
        </div>
     );
}
 
export default Adminhome; 