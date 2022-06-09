import React, { useEffect, useState } from 'react';
import RenderPDF from './RenderPDF';
import { RiBillLine } from 'react-icons/ri';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { parseISO } from 'date-fns';

const Transactions = ({ userId }) => {
  const [invoice, setInvoice] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [invByDate, setInvByDate] = useState(invoice);
  // const [date, setDate] = useState(new Date())

  useEffect(() => {
    fetch('/invoices')
      .then((r) => r.json())
      .then((data) => {
        const invData = data.filter(
          (d) => d.complete === true && d.user_id === userId
        );
        setInvoice(invData);
      });
  }, [userId]);

  const onChange = (dateIn) => {
    const setInvoiceDate = invoice.filter((inv) => {
      let date = parseISO(inv.created_at).toLocaleDateString();
      return date === dateIn.toLocaleDateString();
    });

    console.log(dateIn.toLocaleDateString());
    setInvByDate(setInvoiceDate);
  };

  const handleRender = (invId) => {
    let pdfData = invByDate.filter((invo) => invo.id === invId);
    setFilterData(pdfData);
  };

  const handleSearch = (e) => {
    if (e.target.value) {
      const searchFilter = invByDate.filter((inv) => {
        return inv.customer.customer_name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setInvByDate(searchFilter);
    } else {
      setInvByDate(invoice);
    }
  };

  return (
    <div className='transactions-container'>
      <div className='render-transactions-container'>
        <div className='search-transactions'>
          <Calendar
            onChange={onChange}
            // value={date}
          />
        </div>
        <div>
          <input
            autoComplete='off'
            className='search-transactions'
            type='search'
            onChange={handleSearch}
            placeholder='Search..'
          />
        </div>
        <div className='transactions'>
          <ul>
            {invByDate.map((inv) => (
              <li key={inv.id}>
                <span>
                  {' '}
                  <RiBillLine className='r-icon' />
                  {inv.invoice_num}{' '}
                </span>
                <span>{inv.customer.customer_name}</span>
                <button onClick={() => handleRender(inv.id)}>View</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='render-pdf'>
        <RenderPDF filterData={filterData} />
      </div>
    </div>
  );
};

export default Transactions;
