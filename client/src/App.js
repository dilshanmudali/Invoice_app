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

function App(){

  const [user, setUser] = useState(null)
  const [showbar, setShowBar] = useState(true)
  const [category, setCategory] = useState([])
  const [products, setProducts] = useState([])
  const [customers, setCustomers] = useState([])
  const [orders, setOrders] = useState([])

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
        }) 
      }
    })   
  },[])


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

  const submitOrder = newOrder => {
    console.log(newOrder)
    // fetch('/orders', {
    //   method: 'POST',
    //   headers: {'Content-Type' : 'application/json'},
    //   body: JSON.stringify(newOrder)
    // })
    // .then(r => r.json())
    // .then(newOrder => {
    //   setOrders([...orders, newOrder])
    // })
  }

//Delete category/product/customer/order

  const handleDelCategory = id => {
    console.log(id)
    fetch(`categories/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      const catLeft = category.filter(cato => cato.id !== id)
      setCategory(catLeft)
    })
  }

  const handleDelProd = proId => {
    console.log(proId)
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

  return (
    <>
      <div className='grid-container'>
        <Navigation setShowBar={setShowBar} setUser={setUser}/>
        <SideBar showbar={showbar}/>

        <main style={showbar ? {marginLeft:'250px'} : {marginLeft:'60px'}}>
        <Switch>
          
            <Route path='/' exact={true} component={Home} />
            <Route path='/category'>
              <AddCategory category={category} userId={user.id} submitCategory={submitCategory} handleDelCategory={handleDelCategory}/>
            </Route>
            <Route path='/products'>
              <Products products={products} handleDelProd={handleDelProd} category={category} submitProduct={submitProduct} />
            </Route>
            <Route path='/customers'>
              <Customers customers={customers} submitCustomer={submitCustomer}
              userId={user.id} handleDelcust={handleDelcust}/>
            </Route>

            <Route path='/orders'>
              <Invoice customers={customers} products={products} orders={orders} submitOrder={submitOrder}/>  
            </Route>        
        </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
