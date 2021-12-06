// import React,{useState} from 'react'
// import {BiEdit} from 'react-icons/bi'

function RenderOrders({orders, customerInfo,  handleOrderCancel, handleFinalize}) {

    const customerId = customerInfo.customerId
    const grandTotal = orders.reduce((s, ord) => {
        return s + parseFloat(ord.order_total)
    },0)

    
    console.log((grandTotal))
    return (
        <div className='render-orders-container'>
            <table className='render-table'>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product</th>
                        <th>Product Quantity</th>
                        <th>Product Price</th>
                        <th>Total</th>
                        <th>customer id</th>
                    </tr>
                </thead>
                <tbody>{orders.map(order => order.customer_id === customerId ? ((
                    <tr key={order.id}>
                        <td >{order.product_id}</td>
                        <td >{order.product_name}</td>
                        <td >{order.order_quantity}</td>
                        <td >$ {order.product_price}</td>
                        <td >$ {order.order_total}</td>
                        <td > {order.customer_id}</td>
{/*     
                        <td>
                            <button><BiEdit /></button>    
                        </td> */}
                    </tr>
                )) : null)
                    }
                    
                </tbody>
            </table>
            <div>${(grandTotal).toFixed(2)}</div>
            <div className="invoice-button-container"> 
                    <button onClick={() => handleFinalize(customerId,grandTotal)}>
                        Finalize
                    </button>
                    <button onClick={() => handleOrderCancel(customerId)}>Cancel Invoice</button>              
            </div>
        </div>
    )
}

export default RenderOrders
