import {useState, useEffect} from 'react'
import {BsCart4, BsBagDash} from 'react-icons/bs'
import {GiCoins} from 'react-icons/gi'
import {FaUsers} from 'react-icons/fa'
import ChartRev from './Chart'


const Home = ({totalProd, totalCustomers, userId}) => {

const [totalRev, setTotalRev] = useState('')
const [totalOrd, setTotalOrd] = useState('')
const [chartData, setChartData] = useState('')
    
    useEffect(() =>{
        fetch('/invoices')
        .then(r => r.json())
        .then(invoices => { 
              const totalOrders = invoices.filter(inv => inv.complete === true && inv.user_id === userId)
              const totalRev = totalOrders.reduce((p, ord) => {
                return p + parseFloat(ord.grand_total)
              },0)   
            setChartData(totalOrders) 
            setTotalRev(totalRev.toFixed(2)) 
            setTotalOrd(totalOrders.length)
        })
    },[userId])

    console.log(totalOrd)
    return (
        <div className="home-main">
            <div className="home-card-container">
                <div className="card-body">
                    <div className="float-left">
                        <h3>
                           
                            <span className="currency">$</span>
                            <span className="count">{totalRev}</span>
                        </h3>
                        <p>Revenue</p>
                    </div>
                    <div className="float-right">
                        <i className="cart"><GiCoins /></i>
                    </div>          
                </div>
                <div className="card-body">
                    <div className="float-left">
                        <h3>
                            <span className="currency"></span>
                            <span className="count">{totalOrd}</span>
                        </h3>
                        <p>Orders</p>
                    </div>
                    <div className="float-right">
                        <i className="cart"><BsCart4 /></i>
                    </div>          
                </div>
                <div className="card-body">
                    <div className="float-left">
                        <h3>
                            <span className="currency"></span>
                            <span className="count">{totalProd}</span>
                        </h3>
                        <p>Products</p>
                    </div>
                    <div className="float-right">
                        <i className="cart"><BsBagDash/></i>
                    </div>          
                </div>
                <div className="card-body">
                    <div className="float-left">
                        <h3>
                            <span className="currency"></span>
                            <span className="count">{totalCustomers}</span>
                        </h3>
                        <p>Customers</p>
                    </div>
                    <div className="float-right">
                        <i className="cart"><FaUsers/></i>
                    </div>          
                </div>
            </div>
            <ChartRev chartData={chartData}/>
        </div>
    )
}

export default Home
