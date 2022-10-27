import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Services.module.css'

function Services({text, icon}) {
  return (
    <>
      <Link className={styles.service}>
        <img src={icon} alt="" />
        <p>{text}</p>
       </Link>
    </>
  )
}

export default Services