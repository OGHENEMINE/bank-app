import React, { Children } from 'react'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import styles from './AdminLayout.module.css'

function AdminLayout({children}) {
  return (
    <div className={styles.adminLayout}>
         <AdminSidebar/>
          <div className={styles.children}>
          {children}
          </div>
    </div>
  )
}

export default AdminLayout