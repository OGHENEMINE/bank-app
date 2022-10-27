import React, { useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './CustomerSidebar.module.css'
import Cancel from '../../assets/cancel.svg'
import { ToggleContext } from '../../context/ToggleContext'
// import Bars from '../../assets/toggle.svg'
import Settings from '../../assets/Settings.svg'
import Help from '../../assets/Help.svg'
import Bills from '../../assets/Bills.svg'
import Dashboard from '../../assets/DashCustomer.svg'
import Luxury from '../../assets/Luxury.svg'
import Transaction from '../../assets/TransCustomer.svg'
// import Luxury from '../../assets/Luxury.svg'

function CustomerSidebar() {
   const [nav, setNav] = useContext(ToggleContext)   
   
  return (
    <nav className={`${styles.customerSidebar} ${nav ? styles.sidebarActive : '' }`}>
      <Link onClick={()=> setNav(!nav)}>
        <img src={Cancel} alt="" className={nav ? styles.hide : '' }/>
      </Link>
      <h1>CASH IT</h1>
       <ul>
         <li>
            <NavLink to="/customer" end 
               className={({ isActive }) => ( isActive ? styles.active : "" )}>
               <img src={Dashboard} alt="" />
               <span>Dashboard</span>
            </NavLink>
         </li>
         <li>
            <NavLink to="/customer/transactions"
               className={({ isActive }) => ( isActive ? styles.active : "" )}>
               <img src={Transaction} alt="" />
               <span>Transactions</span>
            </NavLink>
         </li>
         <li>
            <NavLink to="/customer/pay-bills"
               className={({ isActive }) => ( isActive ? styles.active : "" )}>
               <img src={Bills} alt="" />
               <span>Pay Bills</span>
            </NavLink>
         </li>
         <li>
            <NavLink to="/customer/luxury"
               className={({ isActive }) => ( isActive ? styles.active : "" )}>
               <img src={Luxury} alt="" />
               <span>Luxury</span>
            </NavLink>
         </li>
         <li>
            <NavLink to="/customer/help"
               className={({ isActive }) => ( isActive ? styles.active : "" )}>
               <img src={Help} alt="" />
               <span>Help</span>
            </NavLink>
         </li>
       </ul>
       <div className={styles.settings}>
       <NavLink to="/customer/settings"
         className={({ isActive }) => ( isActive ? styles.active : "" )}>
         <img src={Settings} alt="" />
         <span>Settings</span>
       </NavLink>
       </div>
    </nav>
  )
}

export default CustomerSidebar