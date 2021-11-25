import {useState} from "react";
import Navigation from './Components/Header/Navigation'
import SideBar from './Components/Main/SideBar'
import Home from './Components/Main/Home/Home'
import AddCategory from './Components/Main/Category/AddCategory'
import RenderCategory from './Components/Main/Category/RenderCategory'


const App = () => {

  const [showbar, setShowBar] = useState(true)

  return (
    <>
      <div className='grid-container'>
        <Navigation setShowBar={setShowBar} />
        <SideBar showbar={showbar}/>
        <main style={showbar ? {marginLeft:'250px'} : {marginLeft:'60px'}}>
            <Home />
            <div className='category-container'>
                <AddCategory />
                <RenderCategory />
            </div>
        </main>
      </div>
    </>
  );
}

export default App;
