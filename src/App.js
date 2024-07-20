import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Aboutus from './pages/Aboutus';
import Contacts from './pages/Contacts';
import Home from './pages/Homepage';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Sales from './pages/Sales';

// for showing toast messages
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditProfile from './pages/EditProfile';
import Login from './pages/Login';
import Ordersummaryform from './pages/Ordersummaryform';
import Payment from './pages/Payment';
import AddToCart from './pages/admin/AddToCart';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEditProduct from './pages/admin/AdminEditProduct';
import ChangePassword from './pages/admin/changepassword';
import AdminRoutes from './protected_routes/AdminRoutes';
import UserRoutes from './protected_routes/UserRoutes';
// import Sales from './pages/Sales';




function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sales' element={<Sales />} />
      <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        
      <Route element={<UserRoutes />} >

        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/cart' element={<AddToCart />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/product/:id' element={<Ordersummaryform />} />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/sales" element={<Sales/>} />
        <Route path="/contacts" element={<Contacts/>} />

      </Route>
        <Route element={<AdminRoutes />} >
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/edit/:id' element={<AdminEditProduct />} />
        </Route>

      </Routes>

    </Router>
  );
}

export default App;