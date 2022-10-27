import React, { useContext } from 'react'
import CustomerSidebar from '../../components/CustomerSidebar/CustomerSidebar'
import SubNavbar from '../../components/SubNavbar/SubNavbar'
import styles from './CustomerLayout.module.css'
import {ToggleContext } from '../../context/ToggleContext'

function CustomerLayout({children}) {
  const [nav, setNav] = useContext(ToggleContext)

  return (    
      <div className={styles.customerLayout}>
        <CustomerSidebar />
        <div className={nav ? styles.blur : ''}>
          <SubNavbar />
          {children}
        </div>
    </div>
  )
}

export default CustomerLayout