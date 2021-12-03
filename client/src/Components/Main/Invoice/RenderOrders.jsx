import React from 'react'
import {BiEdit} from 'react-icons/bi'

function RenderOrders({orders, customerInfo,  handleOrderCancel}) {
    const customerId = customerInfo.customerId
    return (
        <div className='render-orders-container'>
            <table className='render-table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>customer id</th>
                        <th>Edit/Del</th>
                    </tr>
                </thead>
                <tbody>{orders.map(order => order.customer_id === customerId ? ((
                    <tr key={order.id}>
                        <td >{order.id}</td>
                        <td >{order.product_id}</td>
                        <td >{order.order_quantity}</td>
                        <td >$ {order.order_total}</td>
                        <td >{order.customer_id}</td>
                        <td>
                            <button><BiEdit /></button>    
                        </td>
                    </tr>
                )) : null)
                    }
                    
                </tbody>
            </table>
            <div className="invoice-button-container">    
                    <button onClick={() => handleOrderCancel(customerId)}>Cancel Invoice</button>
            </div>
        </div>
    )
}

export default RenderOrders
