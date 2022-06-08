// import React,{useState} from 'react'
// import {BiEdit} from 'react-icons/bi'

function RenderOrders({ orders, customerInfo, setOrders, handleFinalize }) {
  const customerId = customerInfo.customerId;
  const grandTotal = orders.reduce((s, ord) => {
    return s + parseFloat(ord.order_total);
  }, 0);

  const handleOrderCancel = () => {
    fetch(`ordersAll/${customerId}`, { method: 'DELETE' }).then(() => {
      const orderLeft = orders.filter((ord) => ord.customer_id !== customerId);
      setOrders(orderLeft);
    });
  };

  console.log(grandTotal);
  return (
    <div className='render-orders-container'>
      <div className='orders-table-container'>
        <table className='render-table'>
          <thead>
            <tr>
              <th>customer id</th>
              <th>Product</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) =>
              order.customer_id === customerId ? (
                <tr key={order.id}>
                  <td>{order.customer_id}</td>
                  <td>{order.product_name}</td>
                  <td>$ {order.product_price}</td>
                  <td>{order.order_quantity}</td>
                  <td>$ {order.order_total}</td>

                  {/*     
                        <td>
                            <button><BiEdit /></button>    
                        </td> */}
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>

      <div className='invoice-button-container'>
        {' '}
        <div>
          <button onClick={() => handleFinalize(customerId, grandTotal)}>
            Finalize
          </button>
          <button onClick={() => handleOrderCancel(customerId)}>
            Cancel Invoice
          </button>
        </div>
        <div className='total-render'>${grandTotal.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default RenderOrders;
