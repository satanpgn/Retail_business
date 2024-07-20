import React, { useState } from 'react';
import { changePasswordApi } from '../../apis/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const changeOldPassword = (e) => {
    setOldPassword(e.target.value);
  };

  const changeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(oldPassword, newPassword);

    const data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      userId: userId
    };

    changePasswordApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          navigate('/profile');
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Server Error!');
      });
  };

  return (
    <div>
      <style>{`
        .card {
          max-width: 700px;
          margin-left: 50px;
        }
        .card img {
          width: 30%;
          height: auto;
        }
        .card h1 {
          color: black;
        }
        .form-label {
          color: black;
          text-align: left;
          display: block; /* Ensures label is displayed as block */
          margin-bottom: 0.5rem; /* Adds spacing below the label */
          font-weight: bold;
        }
        .form-control {
          margin-bottom: 1rem;
        }
        
        .btn-submit {
          width: 100%;
          background-color: black;
          color: white;
        }
        .center-button-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-5 rounded shadow-lg">
          <center>
            <img
              src="/images/changepassword.png" 
              alt="Change Password"
            />
          </center>
          <h1 className="mb-4 text-center">Change Password</h1>
          <form className="w-100">
            <div className="mb-3">
              <label htmlFor="oldPassword" className="form-label">Old Password</label>
              <input
                onChange={changeOldPassword}
                value={oldPassword}
                className="form-control"
                type="password"
                id="oldPassword"
                placeholder="Enter your old password"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">New Password</label>
              <input
                onChange={changeNewPassword}
                value={newPassword}
                className="form-control"
                type="password"
                id="newPassword"
                placeholder="Enter your new password"
              />
            </div>

            <button onClick={handleSubmit} className="btn btn-secondary btn-submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
