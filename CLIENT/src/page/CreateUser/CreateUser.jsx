import React from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout/AdminLayout'
import Input from '../../components/Input/Input'
import Plus from '../../assets/More.svg'
import Back from '../../assets/ArrowLeft.svg'
import styles from './CreateUser.module.css'

function CreateUser() {
  return (
     <AdminLayout>
        <div className={styles.form}>
        <form>                
            <div>
            <Link to='/admin/users'>
                <img src={Back} alt="" />
                BACK
            </Link>
            <h2>
                CREATE USER 
            </h2>
            </div>
            <div>
                <label>FIRST NAME</label>
                <Input className={styles.input} type='text'/>
            </div>
            <div>
                <label>LAST NAME</label>
                <Input className={styles.input} type='text'/>
            </div>
            <div>
                <label>EMAIL</label>
                <Input className={styles.input} type='email'/>
            </div>
            <div>
                <label>ROLE</label>
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

export default CreateUser