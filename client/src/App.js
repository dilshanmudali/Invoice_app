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
      console.log(category)
      console.log(newCategory)
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
              <AddCategory category={category} userId={user.id} submitCategory={submitCategory}/>
            </Route>
            <Route path='/products'>
              <Products products={products}/>
            </Route>
            <Route path='/customers' component={Customers}/>

            <Route path='/orders' component={Invoice}/>

          
        </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
