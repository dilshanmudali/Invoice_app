// import '../../CSS/header.css';
// import '../../index.css'
import {ImMenu} from 'react-icons/im';


const Navigation = ({setShowBar}) => {
    return (
        <header>          
            <button onClick={() => setShowBar(prevState => !prevState)} ><ImMenu className="sidebar_btn"/></button>
            <div className="left-area">
                <h3>Store<span>Invo</span></h3>
            </div>
            <div className="right-area">
                <a href="#" className="logout-btn">Logout</a>
            </div>
        </header>
    )
}

export default Navigation
