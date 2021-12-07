import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {RiChatDeleteLine} from 'react-icons/ri'

const RenderCategory = ({category, handleDelCategory}) => {
    
    return (
       <div className='render-products-container'>
           <table className='render-table'>
               <thead>
                   <tr>
                        <th>Category ID</th>
                        <th>Category Name</th>
                        <th>Edit/Del</th>
                    </tr>
                </thead>
                <tbody>{category.map(cato => (
                    <tr key={cato.id}>
                        <td >{cato.id}</td>
                        <td >{cato.category_name}</td>
                        <td>
                            <button><BiEdit /></button>
                            <button onClick={() => handleDelCategory(cato.id)}><RiChatDeleteLine /></button>                    
                        </td>
                    </tr>
                ))
                    }
                    
                </tbody>
           </table>
       </div>
    )
}

export default RenderCategory
