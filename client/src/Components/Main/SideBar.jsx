import React from 'react'
import {ImHome} from 'react-icons/im';
const SideBar = ({showbar}) => {


    return (
        <div className={showbar ? "sidebar" : "sidebar hidebar"}>
        {/* <center>

        </center> */}
        <a href='#'><ImHome /> <span>Home</span></a>
        <a href='#'><ImHome /> <span>Home</span></a>
        <a href='#'><ImHome /> <span>Home</span></a>
        <a href='#'><ImHome /> <span>Home</span></a>
        <a href='#'><ImHome /> <span>Home</span></a>
    </div>
    )
}

export default SideBar
