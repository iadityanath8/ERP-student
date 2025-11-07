import  { useState } from 'react';
import type { User, UserRole } from './types/User';
import LoginPage from './components/LoginPage';
import ForgotPasswordPage from './components/ForgotPassword';
import ResetPasswordPage from './components/ResetPassword';
import RegisterFranchisePage from './components/RegisterFranchise';
import UserProfilePage from './components/UserProfilePage';
import DashboardPage from './components/DashBoard';


const App = () => {
  const [currentPage, setCurrentPage] = useState('register-franchise');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = (role: UserRole) => {
    const mockUser: User = {
      id: '1',
      name: role === 'admin' ? 'Admin User' : role === 'franchise' ? 'Franchise Owner' : role === 'instructor' ? 'John Instructor' : 'Jane Student',
      email: `${role}@example.com`,
      role: role,
      phone: '+91 98765 43210',
      location: 'Mumbai, Maharashtra'
    };
    setCurrentUser(mockUser);
    setCurrentPage('dashboard');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} onLogin={handleLogin} />;
      case 'forgot-password':
        return <ForgotPasswordPage onNavigate={setCurrentPage} />;
      case 'reset-password':
        return <ResetPasswordPage onNavigate={setCurrentPage} />;
      case 'register-franchise':
        return <RegisterFranchisePage onNavigate={setCurrentPage} />;
      case 'profile':
        return <UserProfilePage user={currentUser} onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <DashboardPage user={currentUser} onNavigate={setCurrentPage} />;
      default:
        return <LoginPage onNavigate={setCurrentPage} onLogin={handleLogin} />;
    }
  };

  return <div className="min-h-screen">{renderPage()}</div>;
};

export default App