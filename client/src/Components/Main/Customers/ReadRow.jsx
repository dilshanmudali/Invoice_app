import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {RiChatDeleteLine} from 'react-icons/ri'


const ReadRow = ({handleDelcust, cus, handleEditCust}) => {
    return (
        <tr key={cus.id}>
            <td >{cus.customer_name}</td>
            <td >{cus.customer_email}</td>
            <td >{cus.customer_contact}</td>
            <td >{cus.customer_address}</td>
            <td>
                <button onClick={(e) => handleEditCust(cus.id)}><BiEdit /></button>
                <button onClick={() => handleDelcust(cus.id)}><RiChatDeleteLine /></button>
                
            </td>
        </tr>
    )
}

export default ReadRow
