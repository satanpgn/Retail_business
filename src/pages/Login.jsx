import React, { useState } from 'react';
import { loginApi } from '../apis/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password
    };

    loginApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.userData));
          if (res.data.userData.isAdmin) {
            navigate('/admin/dashboard');
          } else {
            navigate('/');
          }
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Server Error!');
      });
  };

  return (
    <div className="box">
      <body
        style={{
          fontFamily: 'Arial, sans-serif',
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWoMAypSVsiaS7belu5CdLRUe7DVP-COaj6wjIa_HwgXoRz1UEhch0BznINPexjbj3sgc&usqp=CAU')",
          backgroundSize: '100',
          backgroundPosition: 'cover',
        }}
      >
        <div className="login-container" style={{ border: '3px solid #000000', borderRadius: '20px', borderBlockColor:'black', padding: '80px' }}>
        
          <h1 style={{textAlign: 'left', color: 'Green', marginTop: '0', marginBottom: '20px', fontSize: '4em'}}>Login Here!</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
  <img
    className="mx-auto"
    src="/images/logo.jpg"
    alt="login img"
    style={{ height: '200px', width: '200px' }}
  />
</div>

          <form className="w-100" onSubmit={handleSubmit}>
            <div className="form-group fw-bold m-2 ">
              <label style={{ color: 'black',textAlign:'center' }}>Email</label>
              <input
                id="email"
                onChange={changeEmail}
                className="form-control"
                type="email"
                placeholder="Enter your email"
                required
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'black' }}
              />
            </div>
            <div className="form-group fw-bold m-2">
              <label style={{ color: 'black', textAlign:'center' }}>Password</label>
              <input
                id="password"
                onChange={changePassword}
                className="form-control"
                type="password"
                placeholder="Enter your password"
                required
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'black' }}
              />
            </div>
            <button className="btn btn-dark m-2" type="submit" style={{ width: '30%', borderRadius: '10px', textAlign: 'center'}}>
              Login
            </button>
            <br></br>
            <a href="/register" className="text-dark text-decoration-dark fw-bold" style={{ display: 'block', textAlign: 'center', marginTop: '10px', color: '#333' }}>
              Don't have an account? SignUp
            </a>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Login;