import React,{useEffect, useState} from 'react'
import RenderPDF from './RenderPDF'
import {RiBillLine} from 'react-icons/ri'

const Transactions = () => {

    const [invoice, setInvoice] = useState([])
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        fetch('/invoices')
        .then(r => r.json())
        .then(data => {
            const invData = data.filter(d => d.complete === true);
            setInvoice(invData);
        })
    },[])

    const handleRender = (invId) => {
        let pdfData = invoice.filter(invo => invo.id === invId)
        setFilterData(pdfData)
    }

    return (
        <div className='transactions-container'>   
            <div className='render-transactions-container'> 
                <div className='transactions'>
                    <ul>
                        {invoice.map(inv => 
                            <li 
                                key={inv.id}>
                                    <span> <RiBillLine className='r-icon' />{inv.invoice_num} </span>
                                    <span>{inv.customer.customer_name}</span>   
                                    <button onClick={() => handleRender(inv.id)}>View</button>      
                            </li>
                        )}
                    </ul>
                </div>    
            </div>     
            <div className='render-pdf'>
                <RenderPDF filterData={filterData}/>
            </div>
        </div>
    )
}

export default Transactions
