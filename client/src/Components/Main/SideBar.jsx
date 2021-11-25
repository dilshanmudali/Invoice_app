import React from 'react'
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
        <a href='#'><ImHome /> <span>Home</span></a>
        <a href='#'><BiCategory/> <span>Category</span></a>
        <a href='#'><FiShoppingCart /> <span>Products</span></a>
        <a href='#'><IoIosPeople /> <span>Customers</span></a>
        <a href='#'><FaFileInvoiceDollar/> <span>Invoice</span></a>
    </div>
    )
}

export default SideBar
