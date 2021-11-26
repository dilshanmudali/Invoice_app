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

  useEffect(() =>{  
    fetch('/me', {
    })
    .then(r => {
      if(r.ok) {
        r.json().then(user => setUser(user)) 
      }
    })
  },[])

  if(!user) return <Login onLogin={setUser}/>

  return (
    <>
      <div className='grid-container'>
        <Navigation setShowBar={setShowBar} setUser={setUser}/>
        <SideBar showbar={showbar}/>

        <Switch>
          <main style={showbar ? {marginLeft:'250px'} : {marginLeft:'60px'}}>
            <Route path='/' exact={true}>
              <Home />   
            </Route>       
            <Route path='/category'>
                  <AddCategory />
            </Route>
            <Route path='/products'>
                  <Products />
            </Route>
            <Route path='/customers'>
                  <Customers />
            </Route>
            <Route path='/orders'>
                  <Invoice />
            </Route>
          </main>
        </Switch>
      </div>
    </>
  );
}

export default App;
