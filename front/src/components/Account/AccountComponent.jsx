import React from 'react';
import './AccountComponent.css'

function AccountComponent({ name, amount, description }) {
  return (
    <>
      <div className='account'>
        <div className='accountName'>
          <h1>{name}</h1>
          <p>{amount}</p>
          <p>{description}</p>
        </div>
        <button>View transactions</button>
      </div>
    </>
  );
}


export default AccountComponent;
