import React from 'react'
import {AiOutlineFileDone} from 'react-icons/ai'
import {MdArrowBackIos} from 'react-icons/md'

const EditRow = ({prod, newValues, handleChange, handleGoBack}) => {
    return (
        <tr key={prod.id}> 
            <td >{prod.id}</td>
            <td >{prod.product_name}</td>
            <td >{prod.product_description}</td>
            <td >
                <input 
                    type='number'
                    name='product_price'
                    required = {true}
                    placeholder='$'
                    step='any'
                    value={newValues.product_price}
                    onChange={handleChange}
                    className='prod-i'
                /> 
            </td>
            <td >
                <input 
                    type='number'
                    name='product_quantity'
                    min="1" max="500"
                    required = {true}
                    value={newValues.product_quantity}
                    onChange={handleChange}
                    className='prod-q'
                /> 
            </td>
            <td>
                <button><AiOutlineFileDone /></button>
                <button onClick={handleGoBack}><MdArrowBackIos/></button>
        </td>
    </tr>
    )
}

export default EditRow
