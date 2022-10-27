import React from 'react'
import Input from '../../components/Input/Input'
import AuthLayout from '../../layouts/AuthLayout/AuthLayout'
import styles from './Register.module.css'
import useRegister from './useRegister'

function Register() {
   const {onSubmit, form, handleSubmit, errors} = useRegister()
  return (
    <AuthLayout>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label>FIRSTNAME</label>
            <Input name='firstname' className={styles.input} type='text'
            {...form.firstname}/>
            <span>{errors?.firstname?.message}</span>
            </div>
            <div>
            <label>LASTNAME</label>
            <Input  name='lastname' className={styles.input} type='text'
            {...form.lastname}/>
            <span>{errors?.lastname?.message}</span>
            </div>
            <div>
            <label>EMAIL</label>
            <Input  name='email' className={styles.input}  type='email'
            {...form.email}/>
            <span>{errors?.email?.message}</span>
            </div>
            <div>
            <label>PASSWORD</label>
            <Input  name='password' className={styles.input} type='password'
            {...form.password}/>
            <span>{errors?.password?.message}</span>
            </div>
            <button type="submit">SIGN UP</button>
        </form>
    </AuthLayout>
  )
}

export default Register