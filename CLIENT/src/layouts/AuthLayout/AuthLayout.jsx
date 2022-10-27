import React from 'react'
import FormNav from '../../components/FormNav/FormNav'
import styles from './AuthLayout.module.css'
import Money from '../../assets/Exchange.jpg'

function AuthLayout({children}) {
  return (
    <div className={styles.authLayout}>
        <div>
           <h2>BANK IT</h2>
           <span>WELCOME</span>
           <p>Join us today and enjoy so many amazing benefits.</p>
        </div>
        <div className={styles.children}>
            <FormNav/>
            <div>
            {children}
            </div>
        </div>
    </div>
  )
}

export default AuthLayout