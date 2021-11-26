import React from 'react'
import RenderCategory from './RenderCategory'

const AddCategory = () => {


    return (
        <div className='category-container'>            
            <form className='add-category-form'>
                <label>Add Category</label>
                <input type="text" name="add-category" 
                />
                <button>Add Category</button>
            </form>

            <div className='render-category'>
                <RenderCategory />
            </div>
        </div>
    )
}

export default AddCategory
