import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {RiChatDeleteLine} from 'react-icons/ri'

const RenderProducts = ({products, handleDelProd}) => {
    return (
        <div className='render-products-container'>
        <table className='render-table'>
            <thead>
                <tr>
                    <th>Id</th>
                     <th>Name</th>
                     <th>Description</th>
                     <th>Price</th>
                     <th>Quantity</th>
                     <th>Edit/Del</th>
                 </tr>
             </thead>
             <tbody>{products.map(prod => (
                 <tr key={prod.id}>
                     <td >{prod.id}</td>
                     <td >{prod.product_name}</td>
                     <td >{prod.product_description}</td>
                     <td >$ {prod.product_price}</td>
                     <td >{prod.product_quantity}</td>
                     <td>
                         <button><BiEdit /></button>
                         <button onClick={() => handleDelProd(prod.id)}><RiChatDeleteLine /></button>
                         
                     </td>
                 </tr>
             ))
                 }
                 
             </tbody>
        </table>
    </div>
    )
}

export default RenderProducts
