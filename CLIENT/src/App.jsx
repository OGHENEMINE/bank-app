import React, { Suspense } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToggleProvider } from './context/ToggleContext'
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AdminIndex = React.lazy(() => import('./page/AdminIndex/AdminIndex'))
const CustomerIndex = React.lazy(() => import('./page/CustomerIndex/CustomerIndex'))
const Account = React.lazy(() => import('./page/Accounts/Accounts')) 
const Transactions = React.lazy(() => import( './page/Transactions/Transactions'))
const CustomerTransactions = React.lazy(() => import( './page/CustomerTransactions/CustomerTransactions'))
const Users = React.lazy(() => import('./page/Users/Users')) 
const NotFound = React.lazy(() => import('./page/NotFound/NotFound')) 
const Register = React.lazy(()=> import('./page/Register/Register'))
const Login = React.lazy(()=> import('./page/Login/Login'))
const CreateUser = React.lazy(()=> import('./page/CreateUser/CreateUser'))
const EditUser = React.lazy(()=> import('./page/EditUser/EditUser'))
const CreateAccount = React.lazy(()=> import('./page/CreateAccount/CreateAccount'))
const EditAccount = React.lazy(() => import('./page/EditAccount/EditAccount'))
const CreateTransaction = React.lazy(()=> import('./page/CreateTransaction/CreateTransaction'))
const EditTransaction = React.lazy(() => import('./page/EditTransaction/EditTransaction'))
const Loading = React.lazy(() => import('./page/Loading/Loading'))


function App() { 

  return (
     <Suspense fallback={<Loading />}>
      <AuthProvider>
      <ToggleProvider>
      <BrowserRouter>

<ToastContainer
    autoClose={2000}
    position="top-center"
    hideProgressBar={false}
    theme="light"
  />

  <Routes>
     <Route path='admin' element={<AdminIndex />}/>
     <Route path='admin/accounts' element={<Account />}/>
     <Route path='admin/create/account' element={<CreateAccount />}/>
     <Route path='admin/edit/account' element={<EditAccount />}/>
     <Route path='admin/users' element={<Users />}/>
     <Route path='admin/create/user' element={<CreateUser />}/>
     <Route path='admin/edit/user' element={<EditUser />}/>
     <Route path='admin/transactions' element={<Transactions />}/>
     <Route path='admin/create/transaction' element={<CreateTransaction />}/>
     <Route path='admin/edit/transaction' element={<EditTransaction />}/>
     <Route path='customer' element={<CustomerIndex />}/>
     <Route path='customer/transactions' element={<CustomerTransactions />}/>
     <Route path='customer/pay-bills' element={<CustomerIndex />}/>
     <Route path='customer/luxury' element={<CustomerIndex />}/>
     <Route path='customer/settings' element={<CustomerIndex />}/>
     <Route path='customer/help' element={<CustomerIndex />}/>
     <Route path='sign-up' element={<Register />}/>
     <Route path='sign-in' element={<Login />}/>
     <Route path='*' element={<NotFound />}/>
  </Routes>
</BrowserRouter>
      </ToggleProvider>
      </AuthProvider>
     </Suspense>
  )
}

export default App
