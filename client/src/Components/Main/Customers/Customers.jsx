import { useState, useContext } from 'react';
import globalContext from '../../../Context/globalContext';
import RenderCustomers from './RenderCustomers';

const Customers = () => {
  const context = useContext(globalContext);
  const customers = context.customers;
  const setCustomers = context.setCustomers;
  const userId = context.user.id;
  const [addCustomer, setAddCustomer] = useState({
    user_id: userId,
    customer_name: '',
    customer_contact: '',
    customer_email: '',
    customer_address: '',
  });

  const handleChange = (e) => {
    setAddCustomer({
      ...addCustomer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setting new customer
    fetch('/customers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addCustomer),
    })
      .then((r) => r.json())
      .then((newCustomer) => {
        setCustomers([...customers, newCustomer]);
      });

    setAddCustomer({
      user_id: userId,
      customer_name: '',
      customer_contact: '',
      customer_email: '',
      customer_address: '',
    });
  };

  const handleDelcust = (id) => {
    fetch(`customers/${id}`, { method: 'DELETE' }).then(() => {
      const custLeft = customers.filter((cust) => cust.id !== id);
      setCustomers(custLeft);
    });
  };

  return (
    <div className='customer-container'>
      <div className='customer-form-container'>
        <form onSubmit={handleSubmit} className='add-customer-form'>
          <label className='customer-custom-field'>
            <input
              type='text'
              name='customer_name'
              autoComplete='off'
              required={true}
              className='customer-name'
              value={addCustomer.customer_name}
              onChange={handleChange}
            />
            <span className='customer-placeholder'>Customer Name</span>
          </label>
          <label className='customer-custom-field'>
            <input
              type='email'
              name='customer_email'
              autoComplete='off'
              required={true}
              className='customer-email'
              value={addCustomer.customer_email}
              onChange={handleChange}
            />
            <span className='customer-placeholder'>Customer Email</span>
          </label>
          <label className='customer-custom-field'>
            <input
              type='tel'
              pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
              required
              placeholder='contact'
              name='customer_contact'
              autoComplete='off'
              className='customer-contact'
              value={addCustomer.customer_contact}
              onChange={handleChange}
            />
          </label>
          <small>Format: 1234567890</small>
          <div className='customer-address-custom-field'>
            <textarea
              type='text-area'
              className='customer-address'
              name='customer_address'
              autoComplete='off'
              required={true}
              rows='4'
              cols='20'
              value={addCustomer.customer_address}
              onChange={handleChange}
            ></textarea>
            <span className='customer-address-placeholder'>Address</span>
          </div>
          <button>Add Customer</button>
        </form>
      </div>
      <div className='render-customer'>
        <RenderCustomers
          customers={customers}
          handleDelcust={handleDelcust}
          userId={userId}
          setCustomers={setCustomers}
        />
      </div>
    </div>
  );
};

export default Customers;
