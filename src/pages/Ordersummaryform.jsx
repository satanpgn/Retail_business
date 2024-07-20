// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { getSingleProductApi } from '../apis/Api';

// const OrderSummaryForm = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     contactNumber: '',
//     address: '',
//   });
//   const [orderConfirmation, setOrderConfirmation] = useState('');

//   useEffect(() => {
//     getSingleProductApi(id)
//       .then((res) => {
//         setProduct(res.data.product);
//       })
//       .catch((err) => {
//         console.error("Error fetching product:", err);
//       });
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const handleQuantityChange = (delta) => {
//     setQuantity(prevQuantity => Math.max(1, prevQuantity + delta));
//   };

//   const handleOrderClick = () => {
//     console.log('Order placed:', { ...formData, product, quantity });
//     setOrderConfirmation('Order placed successfully!');
//     setTimeout(() => setOrderConfirmation(''), 5000);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f7f7f7', padding: '20px' }}>
//       <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif', maxWidth: '900px', width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#fff', padding: '20px' }}>
//         <div style={{ flex: 1, paddingRight: '20px' }}>
//           <h1 style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Order Summary Form</h1>
          
//           <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
//             <h2 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Product Summary</h2>
//             <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
//               <img
//                 src={product.productImageUrl}
//                 alt={product.productName}
//                 style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', marginRight: '20px' }}
//               />
//               <div style={{ flex: 1 }}>
//                 <h3 style={{ fontSize: '18px', color: '#333', margin: '0' }}>{product.productName}</h3>
//                 <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>Rs {product.productPrice}</p>
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <button onClick={() => handleQuantityChange(1)} style={{ fontSize: '18px', padding: '5px', borderRadius: '5px', margin: '5px' }}>+</button>
//                 <span style={{ fontSize: '18px', margin: '0 10px' }}>{quantity}</span>
//                 <button onClick={() => handleQuantityChange(-1)} style={{ fontSize: '18px', padding: '5px', borderRadius: '5px', margin: '5px' }}>-</button>
//               </div>
//             </div>
//             <hr />
//             <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>Product Total <span style={{ float: 'right' }}>Rs {product.productPrice * quantity}</span></p>
//             <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>Delivery Fee <span style={{ float: 'right' }}>Free</span></p>
//             <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', margin: '5px 0' }}>Total <span style={{ float: 'right' }}>Rs {product.productPrice * quantity}</span></p>
//           </div>
//         </div>

//         <div style={{ flex: 1, paddingLeft: '20px', borderLeft: '1px solid #ddd' }}>
//           <h2 style={{ textAlign: 'left', color: '#333', fontSize: '18px' }}>Full Name</h2>
//           <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} style={inputStyle} />

//           <h2 style={{ textAlign: 'left', color: '#333', fontSize: '18px' }}>Email</h2>
//           <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={inputStyle} />

//           <h2 style={{ textAlign: 'left', color: '#333', fontSize: '18px' }}>Contact Number</h2>
//           <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} style={inputStyle} />

//           <h2 style={{ textAlign: 'left', color: '#333', fontSize: '18px' }}>Address</h2>
//           <input type="text" name="address" value={formData.address} onChange={handleInputChange} style={inputStyle} />

//           <h2 style={{ textAlign: 'left', color: '#333', fontSize: '18px' }}>Payment Method</h2>
//           <div style={{ margin: '10px 0' }}>
//             <button style={buttonStyle}>Cash on Delivery</button>
//             <Link to="/payment">
//               <button style={buttonStyle}>Pay Online</button>
//             </Link>
//           </div>

//           <button onClick={handleOrderClick} style={{ ...buttonStyle, background: '#000', color: '#fff', marginTop: '10px', fontWeight: 'bold' }}>Order</button>
//           {orderConfirmation && <div style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>{orderConfirmation}</div>}
//         </div>
//       </div>
//     </div>
//   );
// };

// const inputStyle = {
//   width: '100%',
//   padding: '10px',
//   margin: '10px 0',
//   borderRadius: '8px',
//   border: '1px solid #ddd',
// };

// const buttonStyle = {
//   width: '100%',
//   padding: '10px',
//   margin: '5px 0',
//   borderRadius: '8px',
//   border: '1px solid #ddd',
//   background: '#f9f9f9',
//   cursor: 'pointer',
// };

// export default OrderSummaryForm;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleProductApi } from '../apis/Api';

const OrderSummaryForm = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    address: '',
  });
  const [orderConfirmation, setOrderConfirmation] = useState('');

  useEffect(() => {
    getSingleProductApi(id)
      .then((res) => {
        setProduct(res.data.product);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (delta) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + delta));
  };

  const handleOrderClick = () => {
    const orderData = {
      userId: "sampleUserId",  // Replace with actual user ID
      productId: product._id,
      quantity,
      ...formData
    };

    axios.post('/api/orders', orderData)
      .then((response) => {
        if (response.data.success) {
          setOrderConfirmation('Order placed successfully!');
        } else {
          setOrderConfirmation(response.data.message);
        }
        setTimeout(() => setOrderConfirmation(''), 5000);
      })
      .catch((error) => {
        console.error('Error placing order:', error);
        setOrderConfirmation('Error placing order');
        setTimeout(() => setOrderConfirmation(''), 5000);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f7f7f7', padding: '20px' }}>
      <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif', maxWidth: '900px', width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#fff', padding: '20px' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <h1 style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Order Summary Form</h1>
          
          <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
            <h2 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Product Summary</h2>
            <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
              <img
                src={product.productImageUrl}
                alt={product.productName}
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', marginRight: '20px' }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', color: '#333', margin: '0' }}>{product.productName}</h3>
                <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>Rs {product.productPrice}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={() => handleQuantityChange(1)} style={{ fontSize: '18px', padding: '5px', borderRadius: '5px', margin: '5px' }}>+</button>
                <span style={{ fontSize: '18px', margin: '0 10px' }}>{quantity}</span>
                <button onClick={() => handleQuantityChange(-1)} style={{ fontSize: '18px', padding: '5px', borderRadius: '5px', margin: '5px' }}>-</button>
              </div>
            </div>
            <hr />
            <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>Product Total <span style={{ float: 'right' }}>Rs {product.productPrice * quantity}</span></p>
            <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>Delivery Fee <span style={{ float: 'right' }}>Free</span></p>
            <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', margin: '5px 0' }}>Total <span style={{ float: 'right' }}>Rs {product.productPrice * quantity}</span></p>
          </div>
        </div>

        <div style={{ flex: 1, paddingLeft: '20px', borderLeft: '1px solid #ddd' }}>
          <h2 style={{ textAlign: 'left', color: '#333', fontSize: '18px' }}>Full Name</h2>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} style={inputStyle} />

          <h2 style={{ textAlign: 'left', color: '#333', fontSize: '18px' }}>Email</h2>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={inputStyle} />

          <h2 style={{ textAlign: 'left', color: '#333', fontSize: '18px' }}>Contact Number</h2>
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} style={inputStyle} />

          <h2 style={{ textAlign: 'left', color: '#333', fontSize: '18px' }}>Address</h2>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} style={inputStyle} />

          <h2 style={{ textAlign: 'left', color: '#333', fontSize: '18px' }}>Payment Method</h2>
          <div style={{ margin: '10px 0' }}>
            <button style={buttonStyle}>Cash on Delivery</button>
            <Link to="/payment">
              <button style={buttonStyle}>Pay Online</button>
            </Link>
          </div>

          <button onClick={handleOrderClick} style={{ ...buttonStyle, background: '#000', color: '#fff', marginTop: '10px', fontWeight: 'bold' }}>Order</button>
          {orderConfirmation && <div style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>{orderConfirmation}</div>}
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '8px',
  border: '1px solid #ddd',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  margin: '5px 0',
  borderRadius: '8px',
  border: '1px solid #ddd',
  background: '#f9f9f9',
  cursor: 'pointer',
};

export default OrderSummaryForm;
