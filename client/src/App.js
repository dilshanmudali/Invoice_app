import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalContext from './Context/globalContext';
import Navigation from './Components/Header/Navigation';
import SideBar from './Components/Main/SideBar';
import Home from './Components/Main/Home/Home';
import AddCategory from './Components/Main/Category/AddCategory';
import Customers from './Components/Main/Customers/Customers';
import Products from './Components/Main/Products/Products';
import Invoice from './Components/Main/Invoice/Invoice';
import Login from './Auth/Login';
import Transactions from './Components/Main/PDF/Transactions';

function App() {
  const [user, setUser] = useState(null);
  const [showbar, setShowBar] = useState(true);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [ordersCopy, setOrdersCopy] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [totalProd, setTotalProd] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);

  // Initial user fetch
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          //set user/category
          setUser(user);
          setCategory(user.categories);
          setProducts(user.products);
          setCustomers(user.customers);
          setOrders(user.orders);
          setOrdersCopy(user.orderdups);
          setInvoice(user.invoices);
        });
      }
    });
  }, []);

  useEffect(() => {
    const totalProducts = products.reduce((a, prod) => {
      return a + prod.product_quantity;
    }, 0);
    setTotalProd(totalProducts);
    setTotalCustomers(customers.length);
  }, [products, customers]);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        showbar,
        setShowBar,
        category,
        setCategory,
        products,
        setProducts,
        customers,
        setCustomers,
        orders,
        setOrders,
        ordersCopy,
        setOrdersCopy,
        invoice,
        setInvoice,
        totalProd,
        setTotalProd,
        totalCustomers,
        setTotalCustomers,
      }}
    >
      <div className='grid-container'>
        <Navigation setShowBar={setShowBar} setUser={setUser} />
        <SideBar showbar={showbar} />

        <main
          style={showbar ? { marginLeft: '250px' } : { marginLeft: '60px' }}
        >
          <Switch>
            <Route path='/' exact={true}>
              <Home />
            </Route>
            <Route path='/category'>
              <AddCategory />
            </Route>
            <Route path='/product'>
              <Products />
            </Route>
            <Route path='/customer'>
              <Customers />
            </Route>
            <Route path='/order'>
              <Invoice />
            </Route>
            <Route path='/pdf'>
              <Transactions userId={user.id} />
            </Route>
          </Switch>
        </main>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
