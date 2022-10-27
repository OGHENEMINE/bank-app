import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input/Input'
import Table from '../../components/Table/Table'
import Edit from '../../assets/Edit.svg'
import Delete from '../../assets/Trash.svg'
import AdminLayout from '../../layouts/AdminLayout/AdminLayout'
import styles from './Transactions.module.css'

function Transactions(){
  const head = ['TYPE', 'USER-ID']

  return (
    <div>
         <AdminLayout>
         <div className={styles.transactions}>
            <h1>TRANSACTIONS</h1>
              <div>
                <form>
                  <Input type= 'search'/>
                  <button>search</button>
                </form>
              </div>
              <div style={{overflowX: 'auto'}}>
                <Table link='transaction' head={head}>
                  <tr>
                  <td>
                    <Input type='checkbox'/>
                  </td>
                  <td>
                    Paul Austin
                  </td>
                  <td>
                    Paul Austin
                  </td>
                    <td>
                    <Link><img src={Edit} alt="" /></Link>
                    <Link><img src={Delete} alt="" /></Link>
                    </td>
                    </tr>
                </Table>
              </div>
         </div>
        </AdminLayout>
    </div>
  )
}

export default Transactions