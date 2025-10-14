import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { CssBaseline } from '@mui/material';
import { useEffect } from 'react';
import Sidebar from './components/layout/SideBar';
import { ToastContainer } from "react-toastify";  
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';  // Add this!
import DashboardLayout from './components/layout/DashboardLayout';
import User from './components/users/User';
import Profile from './components/profile/Profile';

function App() {
  const isAuthenticated = true;


  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('Please log in to access the dashboard.', {
        position: 'top-right', 
        autoClose: 2000,       
    
        onClick: () => {
          window.location.href = '/login';
        },
      });
    } else {
      toast.success('Welcome back! Dashboard loaded.', { autoClose: 2000 });
    }
  }, [isAuthenticated]);
   

  return (
    <CssBaseline>
      <ToastContainer/>
      <BrowserRouter>

        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<DashboardLayout>  <User />  </DashboardLayout>}/>
            <Route  path="/profile" element={<DashboardLayout> <Profile />  </DashboardLayout> }/>
            <Route path="*" element={<DashboardLayout><div>404 Not Found</div></DashboardLayout>} />

          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
