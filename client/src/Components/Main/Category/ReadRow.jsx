import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {RiChatDeleteLine} from 'react-icons/ri'

const ReadRow = ({cato, handleDelCategory, handleEditCat}) => {

    
    return (
        <tr key={cato.id}>
            <td >{cato.id}</td>
            <td >{cato.category_name}</td>
            <td>
                <button onClick={(e) => handleEditCat(e,cato.id)}><BiEdit /></button>
                <button onClick={() => handleDelCategory(cato.id)}><RiChatDeleteLine /></button>                    
            </td>
        </tr>
    )
}

export default ReadRow
