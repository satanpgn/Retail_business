import React, { useState } from 'react';

const Payment = () => {
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment submission logic here
    alert(`Payment submitted:\nBank Name: ${bankName}\nAccount Number: ${accountNumber}\nReceiver Name: ${receiverName}\nAmount: ${amount}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', border: '5px solid #ddd', borderRadius: '10px', maxWidth: '600px', width: '100%' }}>
        <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Payment</h1>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label htmlFor="bankName" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Bank Name</label>
            <input
              type="text"
              id="bankName"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
              required
            />
          </div>
          <div>
            <label htmlFor="accountNumber" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Account Number</label>
            <input
              type="text"
              id="accountNumber"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
              required
            />
          </div>
          <div>
            <label htmlFor="receiverName" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Receiver Name</label>
            <input
              type="text"
              id="receiverName"
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
              required
            />
          </div>
          <div>
            <label htmlFor="amount" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              padding: '10px',
              background: 'black',
              color: '#fff',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginTop: '20px'
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
