import React from 'react'
import RenderProducts from './RenderProducts'

const Products = ({products}) => {
    return (
        <div className='product-container'>  
        <div className='product-form-container'>     
            <form className='add-product-form'> 
            <label className='product-custom-field'>      
                <input type="text" 
                name="product_name"
                autoComplete = 'off' 
                required = {true}
                className="product-name"
                // value = {product_name}
                // onChange={handleChange}
                />
                <span className='product-placeholder'>
                    Product
                </span>
            </label>

            <div className='product-price-container'>
                <label className='product-custom-field'>      <h6>Price</h6>
                    <input type="number" 
                    name="product_price"
                    autoComplete = 'off' 
                    required = {true}
                    className="price"
                    step="any"
                    placeholder='$'
                    // value = {product_name}
                    // onChange={handleChange}
                    />
                   
                </label>
                
                  <label 
                  className='product-custom-field'>     <h6>Quantity</h6>
                    <input type="number" 
                    className='product-quantity'
                    name="product_quantity"
                    autoComplete = 'off' 
                    required = {true}
                    min="1" max="500"
                    // value = {product_name}
                    // onChange={handleChange}
                    />
                </label>
            </div>            
            <div className='product-des-custom-field'>   
                <textarea type="text-area" 
                className='product-description'
                name="product_description"
                autoComplete = 'off' 
                required = {true}
                rows="4" cols="50"
                // value = {product_name}
                // onChange={handleChange}
                >
                 </textarea>
                <span className='product-des-placeholder'>
                    Description
                </span>
            </div>
                <button>Add Product</button>
            </form>
        </div>     
        <div className='render-product'>
            <RenderProducts products={products}/>
        </div>
    </div>
    )
}

export default Products
