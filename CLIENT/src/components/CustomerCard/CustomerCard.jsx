import React from 'react'
import styles from './CustomerCard.module.css'

function CustomerCard() {
  return (
    <div className={styles.customerCard}>
        <p>ACCOUNT NAME</p>
        <p>Balance</p>
    </div>
  )
}

export default CustomerCard