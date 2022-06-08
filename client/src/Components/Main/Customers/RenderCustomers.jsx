import { React, useState, Fragment } from 'react';
import ReadRow from './ReadRow';
import EditRow from './EditRow';

const RenderCustomers = ({
  customers,
  handleDelcust,
  setCustomers,
  userId,
}) => {
  const [custId, setCustId] = useState(null);

  const handleEditCust = (custId) => {
    setCustId(custId);
  };

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
    fetch(`/customers/${custId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ addCustomer }),
    })
      .then((r) => r.json())
      .then((updateCust) => {
        const updatedCustList = customers.map((cust) => {
          if (cust.id === updateCust.id) {
            return updateCust;
          } else {
            return cust;
          }
        });
        setCustomers(updatedCustList);
      });
    setAddCustomer({
      customer_name: '',
      customer_contact: '',
      customer_email: '',
      customer_address: '',
    });
    setCustId(null);
  };

  const handleBack = () => {
    setCustId(null);
  };

  return (
    <div className='render-customer-container'>
      <form onSubmit={handleSubmit}>
        <table className='render-table'>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Edit/Del</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cus) => (
              <Fragment key={cus.id}>
                {custId === cus.id ? (
                  <EditRow
                    cus={cus}
                    addCustomer={addCustomer}
                    handleChange={handleChange}
                    handleBack={handleBack}
                  />
                ) : (
                  <ReadRow
                    cus={cus}
                    handleDelcust={handleDelcust}
                    handleEditCust={handleEditCust}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default RenderCustomers;
