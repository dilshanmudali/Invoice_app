import {useState} from 'react'
import RenderOrders from './RenderOrders'

const Invoice = ({customers, products, orders, submitOrder}) => {

    

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
    const [total, setTotal] = useState(0)
    //new order state 
    const [newOrder, setNewOrder] = useState({
        "customer_id" : "",
        "product_id" : "",
        "order_quantity" : "",
        "product_price" : "",
        "order_total" : ""
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
        setNewOrder({
            ...newOrder, 
            customer_id : customerData.id
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
            productId: productData.id,
            productName: productData.product_name,
            productPrice: productData.product_price,
            productQuantity: productData.product_quantity
        })
        setNewOrder({
            ...newOrder, 
            product_id : productData.id,
            product_price : productData.product_price,
            order_total : total
        })

        setProductSuggestion([])
    }

    
    console.log(total)
    const handleSubmit = (e) => {
        e.preventDefault()      
        console.log(total)
        submitOrder(newOrder)
    }

    //handle orders
    const handleChange = e => {  
        setNewOrder({
            ...newOrder, 
            [e.target.name] : e.target.value
        })
        const orderQuantity = newOrder.order_quantity
        // e.target.children[9] ? setTotal(e.target.chilren[9] ) : null
        setTotal(() => (productInfo.productPrice *  orderQuantity).toFixed(2)) 
    }


    return (
        <div className="orders-container">
            <div className="orders-form-container">   
                <form className="add-orders-form" onSubmit={handleSubmit}>
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
                    <div>Total: {total} </div>
                    <input type='number' 
                        placeholder='Product Quantity'
                        name="order_quantity"
                        autoComplete = 'off' 
                        required = {true}
                        min="1" max={productInfo.productQuantity}
                        value={newOrder.order_quantity}
                        onChange = {handleChange}
                    />
                    <div>available quantity: {productInfo.productQuantity}</div>
                    
                   
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
