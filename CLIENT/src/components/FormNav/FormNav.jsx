import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './FormNav.module.css'

function FormNav() {
  return (
    <div className={styles.formNav}>
            <NavLink to='/sign-up'
                className={({isActive}) => isActive ? styles.active : ''}>
                SIGN UP
            </NavLink>
            <NavLink to='/sign-in'
               className={({isActive}) => isActive ? styles.active : ''}>
                SIGN IN
            </NavLink>
    </div>
  )
}

export default FormNav