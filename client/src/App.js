import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Dashboard from './Pages/Dashboard/Dashboard'
import PageNotFound from './Pages/PageNotFound/PagesNotFound'
import AddProducts from './Components/AddProducts/AddProducts'
import './App.css';

function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="addproducts" element={<AddProducts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
