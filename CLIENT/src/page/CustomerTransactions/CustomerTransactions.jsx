import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input/Input'
import Transaction from '../../components/Transaction/Transaction'
import CustomerLayout from '../../layouts/CustomerLayout/CustomerLayout'
import styles from './CustomerTransactions.module.css'

function CustomerTransactions() {
  return (
    <CustomerLayout>
      <div className={styles.customerTransactions}>
       <div>
       <Link>
       <img src="" alt="" />
       <p>Make Transfer</p>
       </Link>
       <Link>
       <img src="" alt="" />
       <p>Pay Bills</p>
       </Link>
       </div>
       <div>
         <h2>TRANSACTIONS</h2>
         <Input className={styles.input} type="date" name="" id="" />
         <div className={styles.transactionContainer} style={{overflowY: 'scroll'}}>
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
         </div>
       </div>
    </div>
    </CustomerLayout>
  )
}

export default CustomerTransactions