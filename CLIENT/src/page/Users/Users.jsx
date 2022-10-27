import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input/Input'
import Table from '../../components/Table/Table'
import Edit from '../../assets/Edit.svg'
import Delete from '../../assets/Trash.svg'
import AdminLayout from '../../layouts/AdminLayout/AdminLayout'
import styles from './Users.module.css'

function Users() {
 let [inputValue, setInputValue] = useState("");

 const handleChange = (e) =>{
     let NewValue = e.target.value
     setInputValue(inputValue = NewValue)
     console.log(inputValue)
     return NewValue
 }

 const head = ['NAME']


return (
    <div>
        <AdminLayout>
           <div className={styles.users}>
              <div className={styles.tag}>
                <div>
                <select name="userType" id="userType" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="customers">Customers</option>
                  <option value="staffs">Staffs</option>
                </select>
                </div>
                <h1>{inputValue == '' ? "CUSTOMERS" : inputValue}</h1>               
              </div>

             <div className={`${styles.customer} ${inputValue !== 'staffs'? "" : styles.hide}`} id='customer'>         
                <div>
                  <form>
                    <Input type='search'/>
                    <button>search</button>
                </form>
                </div>
                <div style={{overflowX: 'auto'}}>
                  <Table link='user' head={head}>
                  <tr>
                  <td>
                    <Input type='checkbox'/>
                  </td>
                  <td>
                    Paul Austin
                  </td>
                    <td>
                    <Link><img src={Edit} alt="" /></Link>
                    <Link><img src={Delete} alt="" /></Link>
                    </td>
                    </tr>
                  <tr>
                  <td>
                    <Input type='checkbox'/>
                  </td>
                  <td>
                    Ella Jackson
                  </td>
                    <td>
                      <Link><img src={Edit} alt="" /></Link>
                      <Link><img src={Delete} alt="" /></Link>
                    </td>
                    </tr>
                  <tr>
                  <td>
                    <Input type='checkbox'/>
                  </td>
                  <td>
                    Reghan Samuels
                  </td>
                    <td>
                    <Link><img src={Edit} alt="" /></Link>
                    <Link><img src={Delete} alt="" /></Link>
                    </td>
                    </tr>
                  </Table>
              </div>
              </div>

              <div className={`${styles.staff} ${inputValue == 'staffs'? "" : styles.hide}`} id='staff'>         
                  <div>
                    <form>
                    <Input type='search'/>
                    <button>search</button>
                </form>
                  </div>
                  <div style={{overflowX: 'auto'}}>
                  <Table link='user' head={head}>
                  <tr>
                  <td>
                    <Input type='checkbox'/>
                  </td>
                  <td>
                    Paul Austin
                  </td>
                    <td>
                    <Link><img src={Edit} alt="" /></Link>
                    <Link><img src={Delete} alt="" /></Link>
                    </td>
                    </tr>
                    <tr>
                  <td>
                    <Input type='checkbox'/>
                  </td>
                  <td>
                    Paul Austin
                  </td>
                    <td>
                    <Link><img src={Edit} alt="" /></Link>
                    <Link><img src={Delete} alt="" /></Link>
                    </td>
                    </tr>
                    <tr>
                  <td>
                    <Input type='checkbox'/>
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
           </div>
        </AdminLayout>
    </div>
  )
}

export default Users