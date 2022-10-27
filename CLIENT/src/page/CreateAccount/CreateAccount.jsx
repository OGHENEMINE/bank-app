import React from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout/AdminLayout'
import Input from '../../components/Input/Input'
import Plus from '../../assets/More.svg'
import Back from '../../assets/ArrowLeft.svg'
import styles from './CreateAccount.module.css'

function CreateAccount() {
  return (
    <AdminLayout>
          <div className={styles.form}>
        <form>                
            <div>
            <Link to='/admin/accounts'>
                <img src={Back} alt="" />
                BACK
            </Link>
            <h2>
                CREATE ACCOUNT 
            </h2>
            </div>
            <div>
                <label>ACCOUNT NAME</label>
                <Input className={styles.input} type='text'/>
            </div>
            <div>
                <label>STATUS</label>
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