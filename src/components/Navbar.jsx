
import React, { useState } from "react";
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'; // Import the cart icon
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/login');
  };

  return (
    <>
      <style>
        {`
          .banner {
            background-color: #e0f7fa;
            padding: 20px 0;
            text-align: center;
          }

          .banner .container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .banner h1 {
            margin: 0;
            font-size: 2.5rem;
            color: #00796b;
            font-family: 'Arial, sans-serif';
          }

          .banner p {
            margin: 10px 0 0;
            font-size: 1.2rem;
            color: #004d40;
            font-family: 'Arial, sans-serif';
          }

          .banner .banner-image {
            margin-top: 20px;
            max-width: 100%;
            height: auto;
            border-radius: 10px;
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div>
            <Link className="navbar-brand fw-bold fs-4" to="#" style={{ color: 'Green', fontFamily: 'Arial, sans-serif' }}>
              Retail Business
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active me-2 fw" aria-current="page" to={"/"} 
                   style={{ fontFamily: 'Arial, sans-serif' }}>
                   HOME
                 </Link>
               </li>            
               <li className="nav-item dropdown">
                 <Link
                   className="nav-link active dropdown-toggle fw"
                   to="#"
                   role="button"
                   data-bs-toggle="dropdown"
                   aria-expanded="false"
                   style={{ fontFamily: 'Arial, sans-serif' }}
                 >
                   CATEGORY
                 </Link>
                 <ul className="dropdown-menu">
                   <li>
                     <Link className="dropdown-item" to="/sales"
                     style={{ fontFamily: 'Arial, sans-serif' }}>
                       Headphones
                     </Link>
                   </li>
                   <li>
                     <hr className="dropdown-divider"></hr>
                   </li>
                   <li>
                     <Link className="dropdown-item" to="/sales"
                     style={{ fontFamily: 'Arial, sans-serif' }}>
                       Chairs
                     </Link>
                   </li>
                   <li>
                     <hr className="dropdown-divider"></hr>
                   </li>
                   <li>
                     <Link className="dropdown-item" to="/sales"
                     style={{ fontFamily: 'Arial, sans-serif' }}>
                       Laptops
                     </Link>
                   </li>
                 </ul>
               </li>
               <li className="nav-item">
                 <Link className="nav-link active me-2 fw" aria-current="page" to={"/sales"} 
                 style={{ fontFamily: 'Arial, sans-serif' }}>
                   SALES
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link active me-2 fw" aria-current="page" to={"/contacts"} 
                 style={{ fontFamily: 'Arial, sans-serif' }}>
                   CONTACTS
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link active me-2 fw" aria-current="page" to={"/aboutus"} 
                 style={{ fontFamily: 'Arial, sans-serif' }}>
                   ABOUT US
                 </Link>
               </li>
             </ul>
           </div>
          <div className="d-flex">
            {/* Add to Cart Button */}
            <Link to="/cart" className="btn btn-outline-dark me-2">
              <FaShoppingCart />
            </Link>
            {/* User Authentication Section */}
            {user ? (
              <div className="dropdown">
                <button className="btn btn-dark dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FaUserCircle size={24} />
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to={"/profile"}>Profile</Link></li>
                  <li><Link className="dropdown-item" to={"/changepassword"}>Change Password</Link></li>
                  <li><button onClick={handleLogout} className="dropdown-item">Log Out</button></li>
                </ul>
              </div>
            ) : (
              <div className="d-flex">
                <Link className="btn btn-outline-dark me-2" to={'/login'}>Login</Link>
                <Link className="btn btn-outline-dark" to={'/register'}>Register</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      {/* <Banner /> */}
    </>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
      <h1 style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>WELCOME TO GAME GALAXY</h1>
      <p style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>Your ultimate destination for all your gaming needs!</p>
        {/* <img src="https://cdn11.bigcommerce.com/s-p00ofs6bom/images/stencil/1280w/carousel/83/Mothers_Day_CC_Orchids33.jpg?c=1" /> */}
      </div>
    </div>
  );
};

export default Navbar;

