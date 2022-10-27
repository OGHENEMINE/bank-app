import React, {useState} from 'react'
import { NavLink, Link} from 'react-router-dom'
import styles from './AdminSidebar.module.css'
import Bars from '../../assets/toggle.svg'
import Log from '../../assets/logout.svg'
import Cancel from '../../assets/cancel.svg'
import User from '../../assets/user.svg'
import Accounts from '../../assets/Accounts.svg'
import Account from '../../assets/CreateAcc.svg'
import Transaction from '../../assets/Transactions.svg'
import Blog from '../../assets/Blog.svg'
import Help from '../../assets/Help.svg'
import Dashboard from '../../assets/Dashboard.svg'

function AdminSidebar() {
    const [toggleState, setToggle] = useState(false);
  return (
    <>
      <nav className={ `${styles.AdminNav} ${toggleState ? "" : styles.displayToggle}` }>
            <Link className={styles.toggle}
             onClick={() => setToggle(!toggleState)} href="">
             <span className={toggleState ? styles.hide : ""}>
              <img src={Bars} alt="" />
            </span>
            <span className={toggleState ? "" : styles.hide}>
              <img src={Cancel} alt="" />
            </span>
          </Link>


          <ul className={styles.AdminNavItems}>            
            <li>
                <NavLink to="/admin" end
                  className={({ isActive }) => ( isActive ? styles.active : "" )}>
                  <img src={Dashboard} alt="" />
                  <span className={styles.tooltip}>Dashboard</span>
                  <span>Dashboard</span>                
                </NavLink>
            </li>
            <li>
                <NavLink to="/admin/users" 
                  className={({ isActive }) => ( isActive ? styles.active : "" )}>
                  <img src={User} alt="" />
                  <span className={styles.tooltip}>Users</span>
                  <span className={styles.label}>Users</span> 
                </NavLink>
            </li>
            <li>
                <NavLink to="/admin/accounts"
                  className={({ isActive }) => ( isActive ? styles.active : "" )}>
                  <img src={Accounts} alt="" />
                  <span className={styles.tooltip}>Accounts</span>
                  <span className={styles.label}>Accounts</span>                   
                </NavLink>
            </li>
            <li>
                <NavLink to="/admin/transactions"
                  className={({ isActive }) => ( isActive ? styles.active : "" )}>
                  <img src={Transaction} alt="" />
                  <span className={styles.tooltip}>Transactions</span>
                  <span className={styles.label}>Transactions</span>             
                </NavLink>
            </li>
            <li>
                <NavLink to="/account/create"
                  className={({ isActive }) => ( isActive ? styles.active : "" )}>
                  <img src={Account} alt="" />
                  <span className={styles.tooltip}>Create Account</span>
                  <span className={styles.label}>Create Account</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/account/create"
                  className={({ isActive }) => ( isActive ? styles.active : "" )}>
                  <img src={Blog} alt="" />
                  <span className={styles.tooltip}>Create Article</span>
                  <span className={styles.label}>Create Article</span>
                </NavLink>
            </li>            
            <li>
                <NavLink to="/account/create"
                   className={({ isActive }) => ( isActive ? styles.active : "" )}s>
                  <img src={Help} alt="" />
                  <span className={styles.tooltip}>Help Ticket</span>
                  <span className={styles.label}>Help Ticket</span>
                </NavLink>
            </li>            
          </ul>

                <div>
                <Link className={styles.logOut}>
                   <img src={Log} alt="" />
                   <span>
                    Log Out
                   </span>
                </Link>
                </div>

        </nav>
    </>
  )
}

export default AdminSidebar