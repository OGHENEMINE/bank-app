import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input/Input'
import Table from '../../components/Table/Table'
import AdminLayout from '../../layouts/AdminLayout/AdminLayout'
import styles from './Accounts.module.css'

function Accounts() {
  const head = ['ACCOUNT NAME', 'STATUS']
  return (
    <div>
        <AdminLayout>
         <div className={styles.accounts}>
            <h1>ACCOUNTS</h1>
            <div>
              <form>
                <Input type='search'/>
                <button>search</button>
              </form>
            </div>
              <div style={{overflowX: 'auto'}}>
              <Table link='account' head={head}/>
              </div>
         </div>
        </AdminLayout>
    </div>
  )
}

export default Accounts