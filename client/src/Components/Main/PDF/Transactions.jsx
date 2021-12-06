import React,{useEffect, useState} from 'react'
import RenderPDF from './RenderPDF'
import {RiBillLine} from 'react-icons/ri'

const Transactions = () => {

    const [invoice, setInvoice] = useState([])

    useEffect(() => {
        fetch('/invoices')
        .then(r => r.json())
        .then(data => {
            const invData = data.filter(d => d.complete === true);
            setInvoice(invData);
        })
    },[])

    // let pdfData;
    const handleRender = (invId) => {
        // let pdfData = invoice.filter(invo => invo.id === invId)
        console.log(invId)
    }
    return (
        <div className='transactions-container'>   
            <div className='render-transactions-container'> 
                <div className='transactions'>
                    {invoice.map(inv => 
                        <li 
                            key={inv.id}>
                                <button onClick={() => handleRender(inv.id)}> <RiBillLine className='r-icon' />{inv.invoice_num} </button>                  
                        </li>
                    )}
                </div>    
            </div>     
            <div className='render-pdf'>
                <RenderPDF/>
            </div>
        </div>
    )
}

export default Transactions
