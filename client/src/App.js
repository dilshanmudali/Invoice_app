import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
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
    <>
      <div className='grid-container'>
        <Navigation setShowBar={setShowBar} setUser={setUser} />
        <SideBar showbar={showbar} />

        <main
          style={showbar ? { marginLeft: '250px' } : { marginLeft: '60px' }}
        >
          <Switch>
            <Route path='/' exact={true}>
              <Home
                totalProd={totalProd}
                totalCustomers={totalCustomers}
                userId={user.id}
              />
            </Route>
            <Route path='/category'>
              <AddCategory
                category={category}
                userId={user.id}
                setCategory={setCategory}
              />
            </Route>
            <Route path='/product'>
              <Products
                products={products}
                category={category}
                setProducts={setProducts}
              />
            </Route>
            <Route path='/customer'>
              <Customers
                customers={customers}
                setCustomers={setCustomers}
                userId={user.id}
              />
            </Route>

            <Route path='/order'>
              <Invoice
                user={user}
                customers={customers}
                products={products}
                orders={orders}
                invoice={invoice}
                userId={user.id}
                setOrders={setOrders}
                setInvoice={setInvoice}
                setOrdersCopy={setOrdersCopy}
                ordersCopy={ordersCopy}
                setProducts={setProducts}
              />
            </Route>
            <Route path='/pdf'>
              <Transactions userId={user.id} />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
