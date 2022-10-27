import React from 'react'
import { Link } from 'react-router-dom'
import Plus from '../../assets/More.svg'
import Back from '../../assets/ArrowLeft.svg'
import styles from './EditTransaction.module.css'
import Input from '../../components/Input/Input'

function EditTransaction() {
  return (
    <div className={styles.form}>
        <form>                
            <div>
            <Link to='/admin/users'>
                <img src={Back} alt="" />
                BACK
            </Link>
            <h2>
                EDIT TRANSACTION 
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
                    EDIT
                </button>
        </form>
    </div>
  )
}

export default EditTransaction