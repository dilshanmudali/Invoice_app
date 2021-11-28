import React from 'react'
import RenderCustomers from './RenderCustomers'

const Customers = () => {
    return (
        <div className='customer-container'>  
        <div className='customer-form-container'>     
            <form className='add-customer-form'> 
            <label className='customer-custom-field'>      
                <input type="text" 
                name="customer_name"
                autoComplete = 'off' 
                required = {true}
                className="customer-name"
                // value = {product_name}
                // onChange={handleChange}
                />
                <span className='customer-placeholder'>
                    Customer Name
                </span>
            </label>   
            <label className='customer-custom-field'>      
                <input type="tel" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                name="customer_contact"
                autoComplete = 'off' 
                className="customer-contact"
                // value = {product_name}
                // onChange={handleChange}
                />
                <span className='customer-placeholder'>
                    Customer Contact
                </span>
            </label>         
            <div className='customer-des-custom-field'>   
                <textarea type="text-area" 
                className='customer-address'
                name="customer_address"
                autoComplete = 'off' 
                required = {true}
                rows="4" cols="20"
                // value = {product_name}
                // onChange={handleChange}
                >
                 </textarea>
                <span className='customer-des-placeholder'>
                    Address
                </span>
            </div>
                <button>Add Customer</button>
            </form>
        </div>     
        <div className='render-customer'>
            <RenderCustomers />
        </div>
    </div>
    )
}

export default Customers
