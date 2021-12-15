import {useState, useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import Navigation from './Components/Header/Navigation'
import SideBar from './Components/Main/SideBar'
import Home from './Components/Main/Home/Home'
import AddCategory from './Components/Main/Category/AddCategory'
import Customers from './Components/Main/Customers/Customers'
import Products from './Components/Main/Products/Products'
import Invoice from './Components/Main/Invoice/Invoice'
import Login from './Auth/Login'
import Transactions from './Components/Main/PDF/Transactions'

function App(){

  const [user, setUser] = useState(null)
  const [showbar, setShowBar] = useState(true)
  const [category, setCategory] = useState([])
  const [products, setProducts] = useState([])
  const [customers, setCustomers] = useState([])
  const [orders, setOrders] = useState([])
  const [ordersCopy, setOrdersCopy] = useState([])
  const [invoice, setInvoice] = useState([])
  const [sessionInv, setSessionInv] = useState([])
  const [totalProd, setTotalProd] = useState(0)
  const [totalCustomers, setTotalCustomers] = useState(0)

// Initial user fetch
  useEffect(() => {
    fetch('/me', {
    })
    .then(r => {
      if(r.ok) {
        r.json().then(user => {
          //set user/category
          setUser(user)
          setCategory(user.categories)
          setProducts(user.products)
          setCustomers(user.customers)
          setOrders(user.orders)
          setOrdersCopy(user.orderdups)
          setInvoice(user.invoices)
          
          const totalProducts = user.products.reduce((a, prod) => {
            return a + prod.product_quantity 
          },0)


          setTotalProd(totalProducts)     
          setTotalCustomers(user.customers.length)
        }) 
      }
    })  
     
  },[])
  

  useEffect(() =>{
    const totalProducts = products.reduce((a, prod) => {
      return a + prod.product_quantity 
    },0)
      setTotalProd(totalProducts)
  },[products])


  if(!user) return <Login onLogin={setUser}/>

  //1. setting new category
  const submitCategory = newCategory => {
    fetch('/categories', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newCategory)
    })
    .then(r => r.json())
    .then(newCategory => {
      setCategory([...category, newCategory])
     
    })
  }

  //setting new customer
  const submitCustomer = newCustomer => {
    fetch('/customers', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(newCustomer)
    })
    .then(r => r.json())
    .then(newCustomer => {
      setCustomers([...customers, newCustomer]);
    })
    setTotalCustomers(customers.length)
  }


  const submitProduct = newProduct => {
    fetch('/products', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(newProduct)
    })
    .then(r => r.json())
    .then(newProduct => {
      setProducts([...products, newProduct])
    })
  }




  //handle order submit and update product quantity
  const submitOrder = (newOrder, currentQuan, invId) => {
    const id = newOrder.product_id;
    const newQuantity = newOrder.order_quantity;  
    fetch('/orders', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(newOrder)
    })
    .then(r => r.json())
    .then(newOrder => {
      setOrders([...orders, newOrder])
    })

    setSessionInv(invId)
    // making order copy
    fetch('/orderdups', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        ...newOrder,
        complete: false,
        invoice_id : invId
      })
    })
    .then(r => r.json())
    .then(newOrder => {
      setOrdersCopy([...ordersCopy, newOrder])
    })


    fetch(`products/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({product_quantity: currentQuan - newQuantity})
    })
    .then(r => r.json())
    .then(updatedProd => {
      const updateProdList = products.map(prod => {
        if(prod.id === updatedProd.id){
          return updatedProd
        }else{
          return prod
        }
      })
      setProducts(updateProdList)
    })
  }

//Delete category/product/customer/order

  const handleDelCategory = id => {
    fetch(`categories/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      const catLeft = category.filter(cato => cato.id !== id)
      setCategory(catLeft)
    })
  }

  const handleDelProd = proId => {
    fetch(`products/${proId}`, {method: 'DELETE'})
    .then(() => {
      const prodLeft = products.filter(prod => prod.id !== proId)
      setProducts(prodLeft)
    })
  }

  const handleDelcust = id => {
    fetch(`customers/${id}`, {method: 'DELETE'})
    .then(() => {
      const custLeft = customers.filter(cust => cust.id !== id)
      setCustomers(custLeft)
    })
  }

  const handleOrderCancel = customerId => {
    fetch(`ordersAll/${customerId}`, {method: 'DELETE'})
    .then(() => {
      const orderLeft = orders.filter(ord => ord.customer_id !== customerId)
      setOrders(orderLeft)
    })
  }

  const submitInv = invInfo => {
      fetch('/invoices', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          ...invInfo,
          complete : false,
        organization_name : user.organization_name
      })
    })
    .then(r => r.json())
    .then(invInfo => {
      setInvoice([...invoice, invInfo])
    })
  }

  const handleFinalize = (customerId,grandTotal) => {
   console.log(customerId, grandTotal)
    if(sessionInv){
      fetch(`/invoices/${sessionInv}`, {
        method: 'PATCH',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          grand_total : grandTotal,
          complete: true
        })
      })
      .then(r => r.json())
      .then(updateInv => {
        const updateInvList = invoice.map(inv => {
          if(inv.id === updateInv.id){
            return updateInv;
          }else{
            return inv
          }
        })
        setInvoice(updateInvList)
      })
    }

    fetch(`/invoiceFalse`, {method: 'DELETE'})
    .then(() => {
      const invLeft = invoice.filter(inv => inv.customer_id !== customerId)
      setInvoice(invLeft)
    })
   

    fetch(`ordersFinal/${customerId}`, {method: 'DELETE'})
    .then(() => {
      const orderLeft = orders.filter(ord => ord.customer_id !== customerId)
      setOrders(orderLeft)
    })
    setSessionInv([])
  }
  return (
    <>
      <div className='grid-container'>
        <Navigation setShowBar={setShowBar} setUser={setUser}/>
        <SideBar showbar={showbar}/>

        <main style={showbar ? {marginLeft:'250px'} : {marginLeft:'60px'}}>
        <Switch>
          
            <Route path='/' exact={true}> 
                <Home totalProd={totalProd} totalCustomers={totalCustomers} userId={user.id}/>
            </Route>
            <Route path='/category'>
              <AddCategory category={category} userId={user.id} submitCategory={submitCategory} handleDelCategory={handleDelCategory} setCategory={setCategory} />
            </Route>
            <Route path='/product'>
              <Products products={products} handleDelProd={handleDelProd} category={category} submitProduct={submitProduct} setProducts={setProducts}/>
            </Route>
            <Route path='/customer'>
              <Customers customers={customers} submitCustomer={submitCustomer} setCustomers={setCustomers}
              userId={user.id} handleDelcust={handleDelcust}/>
            </Route>

            <Route path='/order'>
              <Invoice customers={customers} products={products} orders={orders} submitOrder={submitOrder}
               handleOrderCancel={ handleOrderCancel} handleFinalize={handleFinalize} submitInv={submitInv}invoice={invoice} userId={user.id}/>  
            </Route>   
            <Route path='/pdf'>
              <Transactions userId={user.id}/>  
            </Route>      
        </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
