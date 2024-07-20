import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerApi } from '../apis/Api';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const navigate = useNavigate();

  const changeFirstName = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z]+$/.test(value) || value === '') {
      setFirstName(value);
      setFirstNameError('');
    } else {
      setFirstNameError('First name should contain only letters.');
    }
  };

  const changeLastName = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z]+$/.test(value) || value === '') {
      setLastName(value);
      setLastNameError('');
    } else {
      setLastNameError('Last name should contain only letters.');
    }
  };

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstNameError || lastNameError) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    const data = {
      firstName,
      lastName,
      email,
      password
    };

    registerApi(data)
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
          navigate('/login'); // Redirect to login after successful registration
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Internal Server Error!');
      });
  };

  return (
    <div className="box">
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWoMAypSVsiaS7belu5CdLRUe7DVP-COaj6wjIa_HwgXoRz1UEhch0BznINPexjbj3sgc&usqp=CAU')",
          backgroundSize: '100',
          backgroundPosition: 'center',
        }}
      >
        <div className="register-container" style={{ border: '3px solid #000000', borderRadius: '20px', padding: '35px', borderBlockColor:'black'}}>
          <h1 style={{textAlign: 'left', color: 'black', marginTop: '0', marginBottom: '20px', fontSize: '3em'}}>Create Your Account!</h1>

        {/* Logo Image
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src="logo.jpg" alt="Logo" style={{ maxWidth: '100px', maxHeight: '100px' }} />
       </div> */}

          <form className="w-100" onSubmit={handleSubmit}>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'black', textAlign:'center', }}>Firstname</label>
              <input 
                onChange={changeFirstName} 
                value={firstName}
                className="form-control" 
                type="text" 
                placeholder="Enter your FirstName" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'black' }}
              />
              {firstNameError && <p style={{ color: 'red', fontSize: '0.9em' }}>{firstNameError}</p>}
            </div>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'black', textAlign:'center' }}>Lastname</label>
              <input 
                onChange={changeLastName} 
                value={lastName}
                className="form-control" 
                type="text" 
                placeholder="Enter your LastName" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'black' }}
              />
              {lastNameError && <p style={{ color: 'red', fontSize: '0.9em' }}>{lastNameError}</p>}
            </div>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'black', textAlign:'center' }}>Email</label>
              <input 
                onChange={changeEmail} 
                value={email}
                className="form-control" 
                type="email" 
                placeholder="Enter your email" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'black' }}
              />
            </div>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'black', textAlign:'center' }}>Password</label>
              <input 
                onChange={changePassword} 
                value={password}
                className="form-control" 
                type="password" 
                placeholder="Enter your password" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'black' }}
              />
            </div>
            <button className="btn btn-dark m-2 w-25" type="submit" style={{ width: '20%', borderRadius: '10px', textAlign: 'center'}}>
              Submit
            </button>
            <p className="mt-3" style={{ textAlign: 'center', color: '#333' }}>
              Already have an account? <a href="/login" className="text-dark text-decoration-dark fw-bold">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
