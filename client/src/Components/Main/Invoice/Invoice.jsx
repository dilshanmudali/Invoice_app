import React from 'react'
import RenderOrders from './RenderOrders'

const Invoice = () => {
    return (
        <div className="orders-container">
            <div className="customer-form-container">   
                <form className="add-orders-form">
                    <input type='text'
                        placeholder='Customer Name'
                    /> 
                    <input type='text' 
                        placeholder='Product Name'
                    /> 
                    <input type='number' 
                        placeholder='Product Quantity'
                    />
                    <div>render's total price for all items and quantity's</div>
                    <button>Add to Order</button>
                    <button>Clear Form</button>
                </form>
            </div> 
            
             <div className='render-orders'>
                <RenderOrders /> 
            </div>
        </div>
    )
}

export default Invoice
