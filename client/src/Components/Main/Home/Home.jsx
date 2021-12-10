import {useState, useEffect} from 'react'
import {BsCart4, BsBagDash} from 'react-icons/bs'
import {GiCoins} from 'react-icons/gi'
import {FaUsers} from 'react-icons/fa'
import ChartRev from './Chart'
import CountUp from 'react-countup';


const Home = ({totalProd, totalCustomers, userId}) => {

const [totalRev, setTotalRev] = useState('')
const [totalOrd, setTotalOrd] = useState('')
const [chartData, setChartData] = useState([])   

    useEffect(() =>{
        fetch('/invoices')
        .then(r => r.json())
        .then(invoices => { 
              const totalOrders = invoices.filter(inv => inv.complete === true && inv.user_id === userId)
              const totalRev = totalOrders.reduce((p, ord) => {
                return p + parseFloat(ord.grand_total)
              },0)   
            //   console.log(totalOrders)
            //   let getData = totalOrders.reduce((acc, val) => {
            //     //  let date = parseISO(val.created_at).toLocaleDateString()
            //     if(acc[val.created_at] === undefined){
            //         acc[val.created_at] = {date: parseISO(val.created_at).toLocaleDateString(), orders: val.grand_total}
            //     }else{
            //         acc[val.created_at].grand_total = acc[val.created_at].grand_total + val.grand_total
            //     }
            //     return acc
            // },[])
            setChartData(totalOrders)  
            setTotalRev(totalRev.toFixed(2)) 
            setTotalOrd(totalOrders.length)
        })
    },[userId])

    return (
        <>
        <div className="home-main">
            <div className="home-card-container">
                <div className="card-body">
                    <div className="float-left">
                        <h3>
                           
                            <span className="currency">$</span>
                            <span className="count">
                                <CountUp start={0} end={totalRev} delay={0} duration={1} decimals={2}/>
                            </span>
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
                            <span className="count">
                                <CountUp start={0} end={totalOrd} delay={0} duration={1}/>
                            </span>
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
                            <span className="count">
                            <CountUp start={0} end={totalProd} delay={0} duration={1}/>
                            </span>
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
                            <span className="count">
                                <CountUp start={0} end={totalCustomers} delay={0} duration={1}/>
                            </span>
                        </h3>
                        <p>Customers</p>
                    </div>
                    <div className="float-right">
                        <i className="cart"><FaUsers/></i>
                    </div>          
                </div>
            </div>
           
        </div>
            <ChartRev chartData={chartData}/>
        </>
    )
}

export default Home
