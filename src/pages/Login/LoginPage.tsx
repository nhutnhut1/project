import React from 'react'
import { Outlet } from "react-router";
import Banner from '../../components/Banner/Banner';
import "./loginpage.scss";


const LoginPage: React.FC = () => {
  return (
    <div className='app_login-page'>
        <Outlet/>
        <Banner/>
    </div>
  )
}

export default LoginPage