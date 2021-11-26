import React from 'react'
import {NavLink} from 'react-router-dom'
import {ImHome} from 'react-icons/im';
import {BiCategory} from 'react-icons/bi';
import {IoIosPeople} from 'react-icons/io'
import {FaFileInvoiceDollar} from 'react-icons/fa'
import {FiShoppingCart} from 'react-icons/fi'


const SideBar = ({showbar}) => {
    return (
        <div className={showbar ? "sidebar" : "sidebar hidebar"}>
        {/* <center>

        </center> */}
        <NavLink to='/' exact={true} activeClassName='is-active'><ImHome /> <span>Home</span></NavLink>
        <NavLink to='/category' activeClassName='is-active'><BiCategory/> <span>Category</span></NavLink>
        <NavLink to='/products' activeClassName='is-active'><FiShoppingCart /> <span>Products</span></NavLink>
        <NavLink to='/customers' activeClassName='is-active'><IoIosPeople /> <span>Customers</span></NavLink>
        <NavLink to='/orders' activeClassName='is-active'><FaFileInvoiceDollar/> <span>Invoice</span></NavLink>
    </div>
    )
}

export default SideBar
