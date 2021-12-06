import React from 'react'

const RenderPDF = () => {

    
    
    return (
        <div className='render-pdf-container'>
            
            <div className='pdf-container'>
                <div className='detail-container'>
                    <div>
                        <h3>Store:</h3>
                        <span>From</span>

                        <h2>Store Name</h2>
                        <p>email.com</p>
                    </div>
                    <div>
                       <h3>Customer:</h3>
                       <span>To</span>

                       <h2>Customer Name</h2>
                       <p>123 way, road pkway blah blachblah</p>
                       <h5>Contact: 123 455 512</h5>
                    </div>
                </div>
                <div className='inv-detail-container'>
                        <div>Invoice No: <span>1234</span></div>
                        <div>Date: <span>12 05 2021</span></div>
                </div>
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
                        <tr>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                    </tbody>
                </table>
                <div className='inv-tot-table-container'>
                <table className='inv-table-total'>
                    <thead>
                        <tr>
                            <th>Invoice Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Total: $123.32</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div className='print'>
                <button>Print</button>
            </div>
        </div>
    )
}

export default RenderPDF
