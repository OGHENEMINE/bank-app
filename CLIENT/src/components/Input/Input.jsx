import React from 'react';
import styles from  './Input.module.css'

function Input({className, ...rest}, ref) {
  return (
      <input 
      {...rest}
      ref={ref}
      className={`${styles.text} ${className}`} />
  )
}

export default React.forwardRef(Input)