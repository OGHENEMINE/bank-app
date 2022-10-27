import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.modules.css'

function NotFound() {
  return (
    <div className='NotFound'>
        <div>
        <p>Page Not Found</p>
        <Link to="/admin">Return</Link>
        </div>
    </div>
  )
}

export default NotFound