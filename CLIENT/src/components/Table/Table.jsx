import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import Plus from '../../assets/More.svg'
import Input from '../Input/Input'
import styles from './Table.module.css'


function Table({link, head, children}) {
    const header = head

  return (
    <div className={styles.table}>
      <Link to={`/admin/create/${link}`}>
       <img src={Plus} alt="" />
       Add {link}
      </Link>
      <table>
              <thead>
                <tr>
                  <th colSpan={0.5}>
                    <Input type='checkbox'/>
                    <label htmlFor="">Select All</label>
                  </th>
                  { header && header.map((column) => (
                      <th>{column}</th>
                  )) }
                  <th>
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {children}
              </tbody>
            </table>
    </div>
  )
}

export default Table