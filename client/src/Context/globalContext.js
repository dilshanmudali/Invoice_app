import React from 'react';

const globalContext = React.createContext({
  user: '',
  setUser: null,
  showbar: true,
  setShowBar: () => {},
  category: [],
  setCategory: () => {},
  products: [],
  setProducts: () => {},
  customers: [],
  setCustomers: () => {},
  orders: [],
  setOrders: () => {},
  ordersCopy: [],
  setOrdersCopy: () => {},
  invoice: [],
  setInvoice: () => {},
  totalProd: 0,
  setTotalProd: () => {},
  totalCustomers: 0,
  setTotalCustomers: () => {},
});

export default globalContext;
