import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {RiChatDeleteLine} from 'react-icons/ri'

const RenderCustomers = ({customers, handleDelcust}) => {
    return (
        <div className='render-customer-container'>
        <table className='render-table'>
            <thead>
                <tr>
                    <th>Id</th>
                     <th>Customer Name</th>
                     <th>Contact</th>
                     <th>Address</th>
                     <th>Edit/Del</th>
                 </tr>
             </thead>
             <tbody>{customers.map(cus => (
                 <tr key={cus.id}>
                     <td >{cus.id}</td>
                     <td >{cus.customer_name}</td>
                     <td >{cus.customer_contact}</td>
                     <td >{cus.customer_address}</td>
                     <td>
                         <button><BiEdit /></button>
                         <button onClick={() => handleDelcust(cus.id)}><RiChatDeleteLine /></button>
                         
                     </td>
                 </tr>
             ))
                 }
                 
             </tbody>
        </table>
    </div>
    )
}

export default RenderCustomers
