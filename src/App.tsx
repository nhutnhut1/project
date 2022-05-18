import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EditPasswordForm from './components/Forms/EditPassword-form/EditPasswordForm';
import ForgotPasswordForm from './components/Forms/ForgotPassword-form/ForgotPasswordForm';
import LoginForm from './components/Forms/LoginForm/LoginForm';
import Dashboard from './components/Layout/Dashboard/Dashboard';
import Device from './components/Layout/Device/Device';
import UserInfo from './components/Layout/UserInfo/UserInfo';
import DashboardPage from './pages/Dashboard/DashboardPage';
import LoginPage from './pages/Login/LoginPage';


const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}>
          <Route path="login" element={<LoginForm/>}/>
          <Route path="forgot-password" element={<ForgotPasswordForm/>} />
          <Route path="edit-password" element={<EditPasswordForm/>}/>
        </Route>
        <Route path="/dashboard" element={<DashboardPage/>}>
          <Route path="panel" element={<Dashboard/>}/>
          <Route path="device" element={<Device/>} />
          <Route path="user-info" element={<UserInfo/>} />
        </Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
