// import React from 'react';

// const ContactUs = () => {
//   return (
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f7f7f7' }}>
//       <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif', maxWidth: '800px', maxHeight: '900px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#fff' }}>
//         <div style={{ flex: 1, padding: '40px' }}>
//           <h1 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Contact us</h1>
//           <form style={{ display: 'flex', flexDirection: 'column' }}>
//             <input type="text" placeholder="Name" style={inputStyle} />
//             <input type="email" placeholder="Email" style={inputStyle} />
//             <input type="text" placeholder="Subject" style={inputStyle} />
//             <textarea placeholder="Create a message here" style={{ ...inputStyle, height: '100px' }}></textarea>
//             <button type="submit" style={{ padding: '10px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>Send Message</button>
//           </form>
//         </div>
//         <div style={{ flex: 1 }}>
//           <img src="https://img.freepik.com/free-photo/high-angle-controller-gaming-chair_23-2149829137.jpg?ga=GA1.1.984481469.1720942599&semt=ais_user" alt="Contact Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const inputStyle = {
//   padding: '10px',
//   marginBottom: '10px',
//   borderRadius: '5px',
//   border: '1px solid #ccc',
//   width: '100%'
// };

// export default ContactUs;

import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [messageConfirmation, setMessageConfirmation] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log('Message sent:', formData);
    setMessageConfirmation('Message Sent');
    setTimeout(() => setMessageConfirmation(''), 5000);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f7f7f7' }}>
      <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif', maxWidth: '800px', maxHeight: '900px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#fff' }}>
        <div style={{ flex: 1, padding: '40px' }}>
          <h1 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Contact us</h1>
          <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSendMessage}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder="Create a message here"
              value={formData.message}
              onChange={handleInputChange}
              style={{ ...inputStyle, height: '100px' }}
            ></textarea>
            <button type="submit" style={{ padding: '10px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
              Send Message
            </button>
          </form>
          {messageConfirmation && <div style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>{messageConfirmation}</div>}
        </div>
        <div style={{ flex: 1 }}>
          <img src="https://images.websitebuilderexpert.com/wp-content/uploads/2023/02/13045442/Contact-Us-Page-Examples.jpg" alt="Contact Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '100%'
};

export default ContactUs;
