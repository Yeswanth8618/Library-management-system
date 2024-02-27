
import './App.css';
import AdminLogin from './Components/AdminLogin';
import Landingpage from './Components/Landingpage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import UserLogin from './Components/UserLogin';
import Adminhome from './Components/Adminhome';
import Userhome from './Components/Userhome'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/user' element={<UserLogin/>}/>
   <Route path='/adminhome/*' element={<Adminhome/>}/>
   <Route path='/userhome/*'  element={<Userhome/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
