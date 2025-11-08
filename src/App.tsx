import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import type { User, UserRole } from './types/User';
import LoginPage from './components/LoginPage';
import ForgotPasswordPage from './components/ForgotPassword';
import ResetPasswordPage from './components/ResetPassword';
import RegisterFranchisePage from './components/RegisterFranchise';
import UserProfilePage from './components/UserProfilePage';
import DashboardPage from './components/DashBoard';
import Navbar from './components/Navbar';
import AdminSidebar from './components/AdminSidebar';
import TeacherSidebar from './components/TeacherSidebar';
import StudentSidebar from './components/StudentSidebar';

// Role & Permission Management
import RoleList from './pages/role-permission/RoleList';
import AddEditRole from './pages/role-permission/AddEditRole';
import PermissionList from './pages/role-permission/PermissionList';
import AssignPermission from './pages/role-permission/AssignPermission';
import ViewRoleAccess from './pages/role-permission/ViewRoleAccess';

// Franchise Management
import FranchiseList from './pages/franchise/FranchiseList';
import AddFranchise from './pages/franchise/AddFranchise';
import UpdateFranchise from './pages/franchise/UpdateFranchise';
import ViewFranchise from './pages/franchise/ViewFranchise';
import UploadDocuments from './pages/franchise/UploadDocuments';
import ManageFranchiseUser from './pages/franchise/ManageFranchiseUser';
import BranchDashboard from './pages/franchise/BranchDashboard';
import DeleteSuspendFranchise from './pages/franchise/DeleteSuspendFranchise';

// Franchise Wallet
import WalletOverviewPage from './pages/wallet/WalletOverview';
import AddAmountAdminToFranchise from './pages/wallet/AddAmountAdminToFranchise';
import AddAmountFranchiseToAdmin from './pages/wallet/AddAmountFranchiseToAdmin';
import TransactionRecord from './pages/wallet/TransactionRecord';
import WalletReportPage from './pages/wallet/WalletReport';
import FranchiseNoticeBoard from './pages/wallet/FranchiseNoticeBoard';

// Course Management
import ProgramList from './pages/course/ProgramList';
import AddProgram from './pages/course/AddProgram';
import EditProgram from './pages/course/EditProgram';
import CourseList from './pages/course/CourseList';
import AddEditCourse from './pages/course/AddEditCourse';
import SubjectList from './pages/course/SubjectList';
import AddSubject from './pages/course/AddSubject';
import EditSubject from './pages/course/EditSubject';
import ViewProgram from './pages/course/ViewProgram';
import ViewCourse from './pages/course/ViewCourse';
import SyllabusList from './pages/course/SyllabusList';
import AddSyllabus from './pages/course/AddSyllabus';
import TopicsList from './pages/course/TopicsList';
import AddTopic from './pages/course/AddTopic';
import EditTopic from './pages/course/EditTopic';
import StudyMaterialPage from './pages/course/StudyMaterial';

const App = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Get current page for navbar
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path.includes('/admin/roles')) return 'roles';
    if (path.includes('/admin/franchise')) return 'franchise';
    if (path.includes('/admin/wallet')) return 'wallet';
    if (path.includes('/admin/course')) return 'courses';
    if (path === '/dashboard') return 'dashboard';
    return '';
  };

  // Check route types
  const isAdminRoute = location.pathname.startsWith('/admin/');
  const isTeacherRoute = location.pathname.startsWith('/teacher/');
  const isStudentRoute = location.pathname.startsWith('/student/');
  const showSidebar = (isAdminRoute || isTeacherRoute || isStudentRoute) && currentUser;

  return (
    <div className="min-h-screen">
      <Navbar user={currentUser} onLogout={handleLogout} currentPage={getCurrentPage()} />
      
      <div className="flex">
        {isAdminRoute && currentUser && <AdminSidebar />}
        {isTeacherRoute && currentUser && <TeacherSidebar />}
        {isStudentRoute && currentUser && <StudentSidebar />}
        
        <main className={`flex-1 ${showSidebar ? 'lg:ml-64' : ''}`}>
          <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/register-franchise" element={<RegisterFranchisePage />} />
        <Route path="/profile" element={<UserProfilePage user={currentUser} />} />
        <Route path="/dashboard" element={<DashboardPage user={currentUser} />} />

        {/* Role & Permission Management (Admin Only) */}
        <Route path="/admin/roles" element={<RoleList />} />
        <Route path="/admin/roles/add" element={<AddEditRole />} />
        <Route path="/admin/roles/edit/:id" element={<AddEditRole />} />
        <Route path="/admin/roles/permissions" element={<PermissionList />} />
        <Route path="/admin/roles/assign/:roleId" element={<AssignPermission />} />
        <Route path="/admin/roles/view/:roleId" element={<ViewRoleAccess />} />

        {/* Franchise Management (Admin) */}
        <Route path="/admin/franchise" element={<FranchiseList />} />
        <Route path="/admin/franchise/add" element={<AddFranchise />} />
        <Route path="/admin/franchise/edit/:id" element={<UpdateFranchise />} />
        <Route path="/admin/franchise/view/:id" element={<ViewFranchise />} />
        <Route path="/admin/franchise/documents/:id" element={<UploadDocuments />} />
        <Route path="/admin/franchise/users/:id" element={<ManageFranchiseUser />} />
        <Route path="/admin/franchise/dashboard/:id" element={<BranchDashboard />} />
        <Route path="/admin/franchise/delete/:id" element={<DeleteSuspendFranchise />} />

        {/* Franchise Wallet (Admin + Franchise) */}
        <Route path="/admin/wallet" element={<WalletOverviewPage />} />
        <Route path="/admin/wallet/add-amount" element={<AddAmountAdminToFranchise />} />
        <Route path="/admin/wallet/payment-to-admin" element={<AddAmountFranchiseToAdmin />} />
        <Route path="/admin/wallet/transactions" element={<TransactionRecord />} />
        <Route path="/admin/wallet/report" element={<WalletReportPage />} />
        <Route path="/admin/wallet/notices" element={<FranchiseNoticeBoard />} />

        {/* Course Management (Admin + Franchise) */}
        <Route path="/admin/course/programs" element={<ProgramList />} />
        <Route path="/admin/course/program/add" element={<AddProgram />} />
        <Route path="/admin/course/program/edit/:id" element={<EditProgram />} />
        <Route path="/admin/course/program/view/:id" element={<ViewProgram />} />
        <Route path="/admin/course" element={<CourseList />} />
        <Route path="/admin/course/add" element={<AddEditCourse />} />
        <Route path="/admin/course/edit/:id" element={<AddEditCourse />} />
        <Route path="/admin/course/view/:id" element={<ViewCourse />} />
        <Route path="/admin/course/subjects" element={<SubjectList />} />
        <Route path="/admin/course/subject/add" element={<AddSubject />} />
        <Route path="/admin/course/subject/edit/:id" element={<EditSubject />} />
        <Route path="/admin/course/syllabus" element={<SyllabusList />} />
        <Route path="/admin/course/syllabus/add" element={<AddSyllabus />} />
        <Route path="/admin/course/topics" element={<TopicsList />} />
        <Route path="/admin/course/topic/add" element={<AddTopic />} />
        <Route path="/admin/course/topic/edit/:id" element={<EditTopic />} />
        <Route path="/admin/course/topic/materials/:topicId" element={<StudyMaterialPage />} />

        {/* Teacher Routes */}
        <Route path="/teacher/classes" element={<div className="p-8"><h1 className="text-2xl font-bold">My Classes</h1></div>} />
        <Route path="/teacher/schedule" element={<div className="p-8"><h1 className="text-2xl font-bold">Schedule</h1></div>} />
        <Route path="/teacher/materials" element={<div className="p-8"><h1 className="text-2xl font-bold">Upload Material</h1></div>} />
        <Route path="/teacher/assignments/create" element={<div className="p-8"><h1 className="text-2xl font-bold">Create Assignment</h1></div>} />
        <Route path="/teacher/assignments" element={<div className="p-8"><h1 className="text-2xl font-bold">View Submissions</h1></div>} />
        <Route path="/teacher/assignments/grade" element={<div className="p-8"><h1 className="text-2xl font-bold">Grade Assignments</h1></div>} />
        <Route path="/teacher/students" element={<div className="p-8"><h1 className="text-2xl font-bold">Student List</h1></div>} />
        <Route path="/teacher/attendance" element={<div className="p-8"><h1 className="text-2xl font-bold">Mark Attendance</h1></div>} />
        <Route path="/teacher/reports" element={<div className="p-8"><h1 className="text-2xl font-bold">Performance Reports</h1></div>} />
        <Route path="/teacher/calendar" element={<div className="p-8"><h1 className="text-2xl font-bold">My Schedule</h1></div>} />
        <Route path="/teacher/upcoming" element={<div className="p-8"><h1 className="text-2xl font-bold">Upcoming Classes</h1></div>} />

        {/* Student Routes */}
        <Route path="/student/courses" element={<div className="p-8"><h1 className="text-2xl font-bold">My Courses</h1></div>} />
        <Route path="/student/browse" element={<div className="p-8"><h1 className="text-2xl font-bold">Browse Courses</h1></div>} />
        <Route path="/student/materials" element={<div className="p-8"><h1 className="text-2xl font-bold">Study Materials</h1></div>} />
        <Route path="/student/assignments/pending" element={<div className="p-8"><h1 className="text-2xl font-bold">Pending Assignments</h1></div>} />
        <Route path="/student/assignments/submitted" element={<div className="p-8"><h1 className="text-2xl font-bold">Submitted Assignments</h1></div>} />
        <Route path="/student/assignments/grades" element={<div className="p-8"><h1 className="text-2xl font-bold">Grades</h1></div>} />
        <Route path="/student/progress" element={<div className="p-8"><h1 className="text-2xl font-bold">My Progress</h1></div>} />
        <Route path="/student/attendance" element={<div className="p-8"><h1 className="text-2xl font-bold">Attendance</h1></div>} />
        <Route path="/student/reports" element={<div className="p-8"><h1 className="text-2xl font-bold">Performance Report</h1></div>} />
        <Route path="/student/schedule" element={<div className="p-8"><h1 className="text-2xl font-bold">Class Schedule</h1></div>} />
        <Route path="/student/upcoming" element={<div className="p-8"><h1 className="text-2xl font-bold">Upcoming Classes</h1></div>} />

        <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
