// import '../../CSS/header.css';
// import '../../index.css'
import {ImMenu} from 'react-icons/im';


const Navigation = ({setShowBar, setUser}) => {

    const handleLogOut = () => {
        fetch('/logout', {
            method: 'DELETE'
        }).then(r => {
            if(r.ok){
                setUser(null);
            }
        })
    }

    return (
        <header>          
            <button onClick={() => setShowBar(prevState => !prevState)} ><ImMenu className="sidebar_btn"/></button>
            <div className="left-area">
                <h3>Store<span>Invo</span></h3>
            </div>
            <div className="right-area">
                <button onClick={handleLogOut} className="logout-btn">Logout</button>
            </div>
        </header>
    )
}

export default Navigation
