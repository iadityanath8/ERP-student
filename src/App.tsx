import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { User, UserRole } from './types/User';
import LoginPage from './components/LoginPage';
import ForgotPasswordPage from './components/ForgotPassword';
import ResetPasswordPage from './components/ResetPassword';
import RegisterFranchisePage from './components/RegisterFranchise';
import UserProfilePage from './components/UserProfilePage';
import DashboardPage from './components/DashBoard';
import Navbar from './components/Navbar';

const App = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const handleLogin = (role: UserRole) => {
    const mockUser: User = {
      id: '1',
      name: role === 'admin' ? 'Admin User' : role === 'franchise' ? 'Franchise Owner' : role === 'teacher' ? 'John Instructor' : 'Jane Student',
      email: `${role}@example.com`,
      role: role,
      phone: '+91 98765 43210',
      location: 'Mumbai, Maharashtra'
    };
    setCurrentUser(mockUser);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate('/login');
  };

  return (
    <div className="min-h-screen">
      <Navbar user={currentUser} onLogout={handleLogout} currentPage={''} onNavigate={function (page: string): void {
        throw new Error('Function not implemented.');
      } } />
      
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/register-franchise" element={<RegisterFranchisePage />} />
        <Route path="/profile" element={<UserProfilePage user={currentUser} />} />
        <Route path="/dashboard" element={<DashboardPage user={currentUser} />} />
        <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
};

export default App;
