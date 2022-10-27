import React from 'react'
import AdminLayout from '../../layouts/AdminLayout/AdminLayout'
import styles from './AdminIndex.module.css'
import Dropdown from '../../assets/Dropdown.svg'
import ArrowUp from '../../assets/ArrowUp.svg'
import ArrowDown from '../../assets/ArrowDown.svg'
import Users from '../../assets/Users.svg'
import Transaction from '../../assets/Transactions.svg'
import { BarChart } from '../../components/BarChart/BarChart'

function AdminIndex() {
  return (
        <AdminLayout>
            <div className={styles.cardLayout}>
            <div className={styles.card}>
                <span><img src={Users} alt="" /></span>
              <h4>
                Users
              </h4>
              <h1>3, 000</h1>
            </div>
            <div className={styles.card}>
              <div>
              <span><img src={Transaction} alt="" /></span>
              <div className={styles.selectTag}>
              <h4>
                Transactions
              </h4>
               <img src={Dropdown} alt="" />
              </div>
              </div>
              <h1>121, 000</h1>
            </div>
            <div className={styles.card}>
              <span><img src={Users} alt="" /></span>
              <h4>
                No. of Users
              </h4>
              <h1>3, 000</h1>
            </div>
            </div>

            <div className={styles.summary}>
              <div>
                <BarChart />
              </div>
              <div>
                <div className={styles.summaryCard}>
                  <h4>
                    withdrawal summary 
                    <span>
                      <img src={Dropdown} alt="" />
                    </span>
                  </h4>
                  <h1>
                    <span>
                      <img src={ArrowUp} alt="" />
                    </span>
                    20%
                  </h1>
                </div>
                <div className={styles.summaryCard}>
                  <h4> 
                    transfer summary
                    <span>
                      <img src={Dropdown} alt="" />
                    </span>
                  </h4>
                  <h1>
                    <span>
                      <img src={ArrowDown} alt="" />
                    </span>
                    10%
                  </h1>
                </div>
              </div>
            </div>
        </AdminLayout>
  )
}

export default AdminIndex