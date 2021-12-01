import {useState} from 'react'
import RenderOrders from './RenderOrders'

const Invoice = ({customers, products}) => {

    //customer States
    const [customerSuggestion, setCustomerSuggestion] = useState([])
    const [customerInfo, setCustomerInfo] = useState({
        customerId : '',
        customerName: '',
        customerContact : '',
        customerAddress : '',
    })
    //product States
    const [productSuggestion, setProductSuggestion] = useState([])
    const [productInfo, setProductInfo] = useState({
        productId: '',
        productName: '',
        productPrice: '',
        productQuantity: ''
    })

    //customer handlers
    const customerHandle = input => {
        let matches = []
        if(input.length > 0){
            matches = customers.filter(cus => {
                const regex = new RegExp(`${input}`, "gi");
                return cus.customer_name.match(regex)
            })
        }
        setCustomerSuggestion(matches)
        setCustomerInfo({
            customerName: input
        })
    }

    const onCustomerSuggest = customerData => {
        setCustomerInfo({
            customerId: customerData.id,
            customerName: customerData.customer_name,
            customerContact: customerData.customer_contact,
            customerAddress : customerData.customer_address
        })
    
        setCustomerSuggestion([])
    }

    // product handlers 

    const productHandle = inputP => {
        let matches = [];
        if(inputP.length > 0){
            matches = products.filter(prod => {
                const regex = new RegExp(`${inputP}`, "gi");
                return prod.product_name.match(regex)
            })
        }
        setProductSuggestion(matches); 
        setProductInfo({
            productName: inputP
        })     
    }

    const onProductSuggest = productData => {
        setProductInfo({
            productId: productData.product_id,
            productName: productData.product_name,
            productPrice: productData.product_price,
            productQuantity: productData.product_quantity
        })
        setProductSuggestion([])
    }

    return (
        <div className="orders-container">
            <div className="orders-form-container">   
                <form className="add-orders-form">
                    <input type='text'
                        placeholder='Customer Name'
                        autoComplete = 'off'
                        onChange={(e) => customerHandle(e.target.value)}
                        name = 'customer-name'
                        value = {customerInfo.customerName}
                    />
                    {customerSuggestion && customerSuggestion.map((suggestion) => <div onClick={() => onCustomerSuggest(suggestion)} key={suggestion.id}>{suggestion.customer_name}</div>)} 
                        <div>customer id:{customerInfo.customerId}</div>
                        <div>customer contact:{customerInfo.customerContact}</div>
                        <div>customer address:{customerInfo.customerAddress}</div>
                        <br/>

                    <input type='text' 
                        placeholder='Product Name'
                        onChange={(e) => productHandle(e.target.value)}
                        value={productInfo.productName}
                    /> 
                    {productSuggestion && productSuggestion.map((suggestion) => <div onClick={() => onProductSuggest(suggestion)} key={suggestion.id}>{suggestion.product_name}</div>)}
                    <small>Product price: $ {productInfo.productPrice}</small>
                    <input type='number' 
                        placeholder='Product Quantity'
                        // value={}

                    />
                    <div>available quantity: {productInfo.productQuantity}</div>
                    <div>Total: </div>
                   
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
