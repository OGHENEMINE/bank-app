import React from 'react'
import Input from '../../components/Input/Input'
import AuthLayout from '../../layouts/AuthLayout/AuthLayout'
import styles from './Login.module.css'
import useLogin from './useLogin'

function Login() {
  const {onSubmit, form, handleSubmit, errors} = useLogin()
  return (
    <AuthLayout>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
            <button type="submit">SIGN IN</button>
        </form>
    </AuthLayout>
  )
}

export default Login