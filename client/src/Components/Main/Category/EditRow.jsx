import React from 'react'
import {AiOutlineFileDone} from 'react-icons/ai'
import {MdArrowBackIos} from 'react-icons/md'

const EditRow = ({cato, newName, handleChange, handleBack}) => {
    return (
        <tr key={cato.id}>
            <td >{cato.id}</td>
            <td >
                <input 
                   type='text'
                   name='category_name'
                   required = {true}
                   placeholder = 'Name'
                   value = {newName.category_name}
                   className = 'cat-i' 
                   onChange={handleChange}
                />   
            </td>
            <td>
            <button><AiOutlineFileDone /></button>
            <button onClick={handleBack}><MdArrowBackIos/></button>                   
            </td>
        </tr>
    )
}

export default EditRow
