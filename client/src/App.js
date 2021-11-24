import {useState} from "react";
import './CSS/sidebar.css';
import Navigation from './Components/Header/Navigation'
import SideBar from './Components/Main/SideBar'


const App = () => {

  const [showbar, setShowBar] = useState(true)

  return (
    <>
      <Navigation setShowBar={setShowBar} />
      <div className="container">
        <SideBar showbar={showbar}/>
        <div style={showbar ? {marginLeft:'250px'} : {marginLeft:'60px'}} className='content'>
            Hello
        </div>
      </div>  
    </>
  );
}

export default App;
