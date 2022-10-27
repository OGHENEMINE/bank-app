import React, { useContext, useState } from 'react'
import Input from '../Input/Input'
import Passport from '../../assets/Avatar.svg'
import Bars from '../../assets/toggle.svg'
import Notification from '../../assets/Notification.svg'
import Search from '../../assets/Search.svg'
import styles from  './SubNavbar.module.css'
import { Link } from 'react-router-dom'
import { ToggleContext } from '../../context/ToggleContext'

function SubNavbar() {
  const [toggle, setToggle] = useState(false);
  const [nav, setNav] = useContext(ToggleContext);

  return (
        <div className={styles.subnavOne}>
          <div>
            <Link onClick={() => setNav(!nav)}>
              <img src={Bars} alt=""/>
            </Link>
          </div>
          <div className={`${styles.search} ${toggle ? styles.active : ''}`}>
            <img src={Search} alt="" onClick={() => setToggle(!toggle)}/>
            <Input type="search" placeholder="search..."/>
          </div>
          <div className={styles.iconContainer}>
              <img src={Passport} alt="" />
              <img src={Notification} alt="" />
          </div>
        </div>
  )
}

export default SubNavbar