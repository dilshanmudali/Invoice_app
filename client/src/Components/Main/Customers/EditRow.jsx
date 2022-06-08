import React from 'react';
import { AiOutlineFileDone } from 'react-icons/ai';
import { MdArrowBackIos } from 'react-icons/md';

const EditRow = ({ cus, addCustomer, handleChange, handleBack }) => {
  return (
    <tr key={cus.id}>
      <td>
        <input
          type='text'
          name='customer_name'
          required={true}
          placeholder='Name'
          value={addCustomer.customer_name}
          className='cus-i'
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type='email'
          name='customer_email'
          required={true}
          placeholder='Email'
          value={addCustomer.email}
          className='cus-i'
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type='tel'
          name='customer_contact'
          required={true}
          placeholder='Contact'
          value={addCustomer.cusomer_contact}
          className='cus-i'
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type='text'
          name='customer_address'
          required={true}
          placeholder='Address'
          value={addCustomer.customer_address}
          className='cus-i'
          onChange={handleChange}
        />
      </td>
      <td>
        <button>
          <AiOutlineFileDone />
        </button>
        <button onClick={handleBack}>
          <MdArrowBackIos />
        </button>
      </td>
    </tr>
  );
};

export default EditRow;
