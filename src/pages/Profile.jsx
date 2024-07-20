import React from 'react';

const Profile = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', border: '3px solid #333', borderRadius: '10px', maxWidth: '600px' }}>
        <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>User Profile</h1>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img
            src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg" // Placeholder image URL
            alt="Profile"
            style={{ height: '200px', width: '200px', borderRadius: '50%' }}
          />
          <a
            href="/editprofile"
            style={{
              marginTop: '20px',
            background: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            cursor: 'pointer',
            display: 'inline-block',
            textDecoration: 'none', // Remove underline from link
      }}
    >
      Edit
    </a>
        </div>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h2>Pankaj Singh</h2>
          <p>Email: pankaj@gmail.com</p>
          <p>Location: Bagdol,Nayadobato Lalitpur</p>
          <p>Age: 23</p>
          <p>Bio: Hlo, It's me Pankaj Singj and I am Developer trying to develop my website for retail business</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
