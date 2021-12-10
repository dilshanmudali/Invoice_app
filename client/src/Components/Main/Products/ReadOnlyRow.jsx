import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {RiChatDeleteLine} from 'react-icons/ri'

const ReadOnlyRow = ({prod, handleDelProd, handleEditProd}) => {
    return (
        <tr key={prod.id}> 
                <td >{prod.id}</td>
                <td >{prod.product_name}</td>
                <td >{prod.product_description}</td>
                <td >$ {prod.product_price}</td>
                <td >{prod.product_quantity}</td>
                <td>
                    <button onClick={(e) => handleEditProd(e,prod.id)}><BiEdit /></button>
                    <button onClick={() => handleDelProd(prod.id)}><RiChatDeleteLine /></button>                 
                </td>
        </tr>
    )
}

export default ReadOnlyRow
