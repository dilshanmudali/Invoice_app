import React from 'react'
import {BsCart4} from 'react-icons/bs'
import {GiCoins} from 'react-icons/gi'
import {BsBagDash} from 'react-icons/bs'

const Home = ({homeState}) => {

    console.log(homeState.total_revenue)
    return (
        <div className="home-main">
            <div className="home-card-container">
                <div className="card-body">
                    <div className="float-left">
                        <h3>
                            <span className="currency">$</span>
                            <span className="count">{homeState.total_revenue}</span>
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
                            <span className="count">{homeState.total_orders}</span>
                        </h3>
                        <p>Total Orders</p>
                    </div>
                    <div className="float-right">
                        <i className="cart"><BsCart4 /></i>
                    </div>          
                </div>
                <div className="card-body">
                    <div className="float-left">
                        <h3>
                            <span className="currency"></span>
                            <span className="count">{homeState.total_products}</span>
                        </h3>
                        <p>Total Products</p>
                    </div>
                    <div className="float-right">
                        <i className="cart"><BsBagDash/></i>
                    </div>          
                </div>
            </div>
        </div>
    )
}

export default Home
