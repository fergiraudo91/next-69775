'use client';
import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import LoginPage from './login/LoginPage';

const AdminLayout = ({children, login}) => {
    const { user } = useAuthContext();
   console.log(user);
   if(!user){
    return <div>Loading...</div>
   }
  return (
    <div>
        {
            user?.logged ? children : <LoginPage />
        }
    </div>
  )
}

export default AdminLayout