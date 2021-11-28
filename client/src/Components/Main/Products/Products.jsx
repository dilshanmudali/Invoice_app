import React from 'react'
import RenderProducts from './RenderProducts'

const Products = () => {
    return (
        <div className='products-container'>            
        <form className='add-product-form'>
            <label>Add Products</label>
            <input type="text" name="add-product" 
            />
            <button>Add Products</button>
        </form>

        <div className='render-products'>
            <RenderProducts/>
        </div>
    </div>
    )
}

export default Products
