import React from 'react'

const RenderPDF = ({filterData}) => {

    const invoData = filterData.map(inv => {
        return(                      
            <div className='pdf-container' key={inv.id}>
                <div className='detail-container'>
                    <div>
                        <h3>Store:</h3>
                        <span>From</span>

                        <h2>{inv.organization_name}</h2>
                        <p>email.com</p>
                    </div>
                    <div>
                       <h3>Customer:</h3>
                       <span>To</span>

                       <h2>{inv.customer.customer_name}</h2>
                       <p>{inv.customer.customer_address}</p>
                       <h5>{inv.customer.customer_contact}</h5>
                    </div>
                </div>
                <div className='inv-detail-container'>
                        <div>Invoice No: <span>{inv.invoice_num}</span></div>
                        <div>Date: <span>12 05 2021</span></div>
                </div>
                <div className="inv-table-container">
                    <table className='inv-table'>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Quantity</th>
                                <th>Product Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inv.orderdups.map( i => <tr key={i.id}>
                                <td >{i.product_name}</td>
                                <td >{i.order_quantity}</td>
                                <td >{i.product_price}</td>
                                <td >$ {i.order_total}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
                <div className='inv-tot-table-container'>
                <table className='inv-table-total'>
                    <thead>
                        <tr>
                            <th>Invoice Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Total: ${inv.grand_total}</td>                           
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        )
    })
 
    return (
        <div className='render-pdf-container'>
            {invoData}
            <div className='print'>
                <button>Print</button>
            </div>
        </div>
    )
}

export default RenderPDF
