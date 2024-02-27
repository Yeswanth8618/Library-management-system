import '../styles/admindash.css'
import Typewriter from "typewriter-effect";
const AdminDashboard = () => {
    return ( 
        <div className="admindashboard">
            <h1>ADMIN DASHBOARD</h1>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("WECOMES YOU TO")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("YESWANTH'S LIBRARY")
                        .start();
                }}
            />
        </div>
     );
}
 
export default AdminDashboard;