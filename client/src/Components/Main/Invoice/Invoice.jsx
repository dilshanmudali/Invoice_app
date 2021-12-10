import {useState} from 'react'
import RenderOrders from './RenderOrders'

const Invoice = ({customers, products, orders, submitOrder,  handleOrderCancel, handleFinalize, submitInv, invoice, userId}) => {

    
    //hide/show customer input
    const [customerInputVisible, setCustomerInputVisible] = useState(true)
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
        "product_name" : "",
        "order_quantity" : "",
        "product_price" : "",
        "order_total" : ""
    })

    //invoice state 
    const [invoiceInfo, setInvoiceInfo] = useState({
        "customer_id" : '',
        "user_id" : userId,
        "invoice_num" : Math.floor(100000 + Math.random()*9000000),
        "organization_name" : '123Company'
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
        setInvoiceInfo({
            ...invoiceInfo,
            customer_id: customerData.id
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
            product_name : productData.product_name,
            product_price : productData.product_price,
            order_total : total
        })
        

        setProductSuggestion([])
    }


    const handleInvoiceSubmit = (e) => {
        e.preventDefault()
        // let invNum = 
        // setInvoiceInfo({
        //     invoice_num : invNum
        // })
        console.log(invoiceInfo)
        submitInv(invoiceInfo)
        setCustomerInputVisible(false)
    }

    //handle orders
    const handleChange = e => {
        setNewOrder({
            ...newOrder, 
            [e.target.name] : e.target.value,
            "order_total" : (parseFloat(productInfo.productPrice)*parseFloat(e.target.value))
        })
        setTotal(() => (parseFloat(productInfo.productPrice) * parseFloat(e.target.value)).toFixed(2)) 
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()  
        let invNum = parseInt(invoiceInfo.invoice_num)
        const invId = invoice.find(inv => inv.invoice_num === invNum).id
        const currentQuan = productInfo.productQuantity
        submitOrder(newOrder, currentQuan, invId)
        setProductInfo({
            productName: '',
            productPrice: '',
            productQuantity: ''
        })
          setNewOrder({
            "customer_id" : customerInfo.customerId,
            "product_id" : "",
            "product_name" : "",
            "order_quantity" : "",
            "product_price" : "",
            "order_total" : ""})
        setTotal(0)
    }

    const handleCancelInvo = () => {
        console.log(invoiceInfo.invoice_num)
        let invId = invoice.find(inv => inv.invoice_num === invoiceInfo.invoice_num).id
        fetch(`invoices/${invId}`, {method: 'DELETE'})
        setCustomerInfo({
            customer_id: ""
        })
        setCustomerInputVisible(true)
    }
   
    const handleClearForm = (e) => {
        e.preventDefault()
        setProductInfo({
            productId: '',
            productName: '',
            productPrice: '',
            productQuantity: ''
        })
        setNewOrder({
            "customer_id" : customerInfo.customerId,
            "product_id" : "",
            "product_name" : "",
            "order_quantity" : "",
            "product_price" : "",
            "order_total" : ""})
        setTotal(0)
    }

    

    return (
        <div className="orders-container">
            <div className="orders-form-container">   
                <div className="invoice-number-form">
                     <form onSubmit={handleInvoiceSubmit} 
                     className="create-invoice-form">
                                {customerInputVisible ? 
                            (    
                            <label className='invoice-custom-field'>
                                <input type='text'
                                    autoComplete = 'off'
                                    required= {true}
                                    onChange={(e) => customerHandle(e.target.value)}
                                    name = 'customer-name'
                                    value = {customerInfo.customerName}
                                    />
                                    <span className='customer-invoice-placeholder'>
                                        Customer Name
                                    </span>
                                </label>
                                ) 
                                : <div className='customer-invoice-info'>{customerInfo.customerName}</div> }
                                {customerSuggestion && customerSuggestion.map((suggestion) => <div onClick={() => onCustomerSuggest(suggestion)} key={suggestion.id}>{suggestion.customer_name}</div>)} 
                                {/* <div>customer contact:{customerInfo.customerContact}</div>
                                <div>customer address:{customerInfo.customerAddress}</div>
                                 <br/> */}
                            {customerInputVisible ? (
                            <button>Create Invoice</button>) : (
                            <button onClick={handleCancelInvo}>Cancel</button>)}
                     </form>
                    
                </div>
                <div className="invoice-product-form-container">
                <form className="add-orders-form" onSubmit={handleSubmit}>
                    <label className='order-product-custom-field'>
                        <input type='text' 
                            className='order-name-input'
                            required = {true}
                            onChange={(e) => productHandle(e.target.value)}
                            value={productInfo.productName}
                        />
                        <span className='order-product-placeholder'>
                            Product Name
                        </span> 
                    </label>
                    {productSuggestion && productSuggestion.map((suggestion) => <div onClick={() => onProductSuggest(suggestion)} key={suggestion.id}>{suggestion.product_name}</div>)}
                        {productInfo.productPrice ?
                        
                        <div className="order-price-container"> $ {productInfo.productPrice}
                        </div> : null }
                    <div className="order-quantity-container">
                        <div>
                            {productInfo.productName? ((
                            (<h6>Quantity</h6>) &&
                            <input type='number' 
                                name="order_quantity"
                                autoComplete = 'off' 
                                required = {true}
                                min="1" max={productInfo.productQuantity}
                                value={newOrder.order_quantity}
                                onChange = {handleChange}
                            />)) : null}
                        </div>
                        </div>
                        <div className="total-container">
                            <div>
                                <h6>Av. Quan</h6>
                                <div className='order-available-quan'>
                                {productInfo.productQuantity? productInfo.productQuantity - newOrder.order_quantity : 0}
                                </div>
                            </div>
                            <div className='available-container'>
                                <h6>Total</h6>
                                <div className='total-total'>$ {total? total : 0} 
                                </div>
                            </div>
                           
                        </div>
                    
                   <div className='form-btn-container'>
                    <button>Add to Order</button>
                    <button onClick={handleClearForm}>Clear Form</button>
                    </div>
                </form>
                </div>
            </div> 
            
             <div className='render-orders'>
                <RenderOrders orders={orders} customerInfo={customerInfo}  handleOrderCancel={ handleOrderCancel} handleFinalize={handleFinalize}
               /> 
            </div>
        </div>
    )
}

export default Invoice
