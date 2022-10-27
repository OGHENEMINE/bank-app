import React from 'react'
import styles from './Transaction.module.css'

function Transaction() {
  return (
    <div className={styles.transaction}>
      <p>AIRTIME RECHARGE</p>
      <p> &#8358; 500</p>
    </div>
  )
}

export default Transaction