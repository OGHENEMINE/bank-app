import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CustomerCard from '../../components/CustomerCard/CustomerCard'
import Transaction from '../../components/Transaction/Transaction'
import CustomerLayout from '../../layouts/CustomerLayout/CustomerLayout'
import styles from './CustomerIndex.module.css'
import Plus from '../../assets/More.svg'
import Services from '../../components/Services/Services'

// import { Glide } from 'react-glide';
// import 'react-glide/lib/reactGlide.css'


function CustomerIndex() {
  return (
    <CustomerLayout>
        <div className={styles.customerIndex}>
        <div className={styles.subnavTwo}>
          <h2>Welcome, Ella</h2>
          <div>
            <h2>Total Balance</h2>
            <p> &#8358; 300, 000.00</p>
          </div>
          <div>
             <button>MAKE TRANSFER</button>
             <button>PAY BILLS</button>
          </div>
        </div>
          <div className={styles.accountCards}>
              <CustomerCard/>
              <CustomerCard/>
              <CustomerCard/>
          </div>  
          <div className={styles.section}>
            <div>
              <h3>RECENT TRANSACTIONS</h3>
              <Link href="">
                <img src={Plus} alt="" />
                See All...
              </Link>
              <div>
              <Transaction/>
              <Transaction/>
              <Transaction/>
              </div>
            </div>  
            <div>
              <h3>SERVICES</h3>
              <div className={styles.servicesWrapper}>
                 <Services icon={Plus} text='Pay Bill'/>                 
                 <Services icon={Plus} text='Transfer'/>                 
                 <Services icon={Plus} text='Beneficiary'/>                 
                 <Services icon={Plus} text='Save Money'/>                 
                 <Services icon={Plus} text='Loan'/>                 
                 <Services icon={Plus} text='Transfer'/>                 
              </div>
            </div>  
          </div>      
        </div>
    </CustomerLayout>
  )
}

export default CustomerIndex              