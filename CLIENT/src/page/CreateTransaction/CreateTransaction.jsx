import React from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout/AdminLayout'
import Input from '../../components/Input/Input'
import Plus from '../../assets/More.svg'
import Back from '../../assets/ArrowLeft.svg'
import styles from './CreateTransaction.module.css'

function CreateAccount() {
  return (
     <AdminLayout>
         <div className={styles.form}>
        <form>                
            <div>
            <Link to='/admin/transactions'>
                <img src={Back} alt="" />
                BACK
            </Link>
            <h2>
                CREATE TRANSACTION 
            </h2>
            </div>
            <div>
                <label>TYPE</label>
                <div className={styles.select}>
                    <select name="" id="">
                        <option value="credit">CREDIT</option>
                        <option value="debit">DEBIT</option>
                    </select>
                </div>
            </div>
            <div>
                <label>AMOUNT</label>
                <Input className={styles.input} type='number'/>
            </div>
            <div>
                <label>TO</label>
                <Input className={styles.input} type='text'/>
            </div>
                <button>
                    <img src={Plus} alt="" />
                    CREATE
                </button>
        </form>
    </div>
     </AdminLayout>
  )
}

export default CreateAccount