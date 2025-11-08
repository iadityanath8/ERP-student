import React from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
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

// Batch Management
import BatchList from './pages/batch/BatchList';
import AddEditBatch from './pages/batch/AddEditBatch';
import BatchDetailsView from './pages/batch/BatchDetailsView';
import AssignStudents from './pages/batch/AssignStudents';

// Student Enquiries
import EnquiryList from './pages/enquiry/EnquiryList';
import AddEnquiry from './pages/enquiry/AddEnquiry';
import ViewEnquiry from './pages/enquiry/ViewEnquiry';
import FollowUpTracker from './pages/enquiry/FollowUpTracker';
import ConvertToAdmission from './pages/enquiry/ConvertToAdmission';

// Student Admission
import AdmissionList from './pages/admission/AdmissionList';
import AddAdmission from './pages/admission/AddAdmission';
import ViewAdmission from './pages/admission/ViewAdmission';
import GenerateRollNumber from './pages/admission/GenerateRollNumber';
import AssignCredentials from './pages/admission/AssignCredentials';
import UploadAdmissionDocuments from './pages/admission/UploadAdmissionDocuments';
import AdmissionReport from './pages/admission/AdmissionReport';

// Fee Management
import FeeDashboardPage from './pages/fee/FeeDashboard';
import FeeSlipList from './pages/fee/FeeSlipList';
import AddFeeSlip from './pages/fee/AddFeeSlip';
import ViewFeeSlip from './pages/fee/ViewFeeSlip';
import DueFeeList from './pages/fee/DueFeeList';
import FeeReportPage from './pages/fee/FeeReport';
import FeeReminderNotification from './pages/fee/FeeReminderNotification';

// Online Live Class
import LiveClassDashboard from './pages/live-class/LiveClassDashboard';
import AddYouTubeClass from './pages/live-class/AddYouTubeClass';
import AddZoomMeetClass from './pages/live-class/AddZoomMeetClass';
import ClassCalendarPage from './pages/live-class/ClassCalendar';
import JoinClass from './pages/live-class/JoinClass';
import ClassRecordings from './pages/live-class/ClassRecordings';

// Online Exam Module
import QuestionBank from './pages/exam/QuestionBank';
import AddQuestion from './pages/exam/AddQuestion';
import ImportQuestion from './pages/exam/ImportQuestion';
import ExamList from './pages/exam/ExamList';
import AddExam from './pages/exam/AddExam';
import AdmitCardGenerator from './pages/exam/AdmitCardGenerator';
import ExamResult from './pages/exam/ExamResult';
import ExamAnalyticsPage from './pages/exam/ExamAnalytics';
import OngoingExams from './pages/exam/OngoingExams';
import CompletedExams from './pages/exam/CompletedExams';

// Certificate & Marksheet
import CertificateGenerator from './pages/certificate/CertificateGenerator';
import MarksheetGenerator from './pages/certificate/MarksheetGenerator';
import CertificateList from './pages/certificate/CertificateList';
import ViewDownload from './pages/certificate/ViewDownload';

// Staff Management
import StaffList from './pages/staff/StaffList';
import AddStaff from './pages/staff/AddStaff';
import EditStaff from './pages/staff/EditStaff';
import AssignRole from './pages/staff/AssignRole';
import StaffReport from './pages/staff/StaffReport';

// Attendance
import StudentAttendancePage from './pages/attendance/StudentAttendance';
import MarkAttendance from './pages/attendance/MarkAttendance';
import AttendanceReportPage from './pages/attendance/AttendanceReport';
import StaffAttendancePage from './pages/attendance/StaffAttendance';
import MarkStaffAttendance from './pages/attendance/MarkStaffAttendance';
import AttendanceCalendar from './pages/attendance/AttendanceCalendar';

// Income & Expenses
import IncomeList from './pages/finance/IncomeList';
import AddIncome from './pages/finance/AddIncome';
import ExpenseList from './pages/finance/ExpenseList';
import AddExpense from './pages/finance/AddExpense';
import FinanceDashboard from './pages/finance/FinanceDashboard';
import FinanceReport from './pages/finance/FinanceReport';

// Notifications
import NotificationList from './pages/notification/NotificationList';
import SendNotification from './pages/notification/SendNotification';
import NotificationTemplates from './pages/notification/NotificationTemplates';
import NotificationSettings from './pages/notification/NotificationSettings';
import NotificationHistory from './pages/notification/NotificationHistory';
import NotificationQueue from './pages/notification/NotificationQueue';

// Reports & Analysis
import StudentReport from './pages/reports/StudentReport';
import FeeReport from './pages/reports/FeeReport';
import AttendanceReport from './pages/reports/AttendanceReport';
import ExamReport from './pages/reports/ExamReport';
import AnalyticsDashboard from './pages/reports/AnalyticsDashboard';

// Course Sales
import CourseSalesList from './pages/sales/CourseSalesList';
import AddSale from './pages/sales/AddSale';
import SalesReport from './pages/sales/SalesReport';

// Support Center
import TicketList from './pages/support/TicketList';
import CreateTicket from './pages/support/CreateTicket';
import ViewTicket from './pages/support/ViewTicket';
import TicketManagement from './pages/support/TicketManagement';

// Integrations
import IntegrationList from './pages/integration/IntegrationList';
import AddIntegration from './pages/integration/AddIntegration';
import IntegrationSettings from './pages/integration/IntegrationSettings';
import IntegrationLogs from './pages/integration/IntegrationLogs';

// Front CMS
import PageList from './pages/cms/PageList';
import AddEditPage from './pages/cms/AddEditPage';
import MenuManagement from './pages/cms/MenuManagement';
import BannerManagement from './pages/cms/BannerManagement';
import CMSSettings from './pages/cms/CMSSettings';
import PagePreview from './pages/cms/PagePreview';

// Student Panel
import StudentDashboard from './pages/student/StudentDashboard';
import StudentProfile from './pages/student/StudentProfile';
import StudentCourses from './pages/student/StudentCourses';
import StudentLiveClasses from './pages/student/StudentLiveClasses';
import StudentExams from './pages/student/StudentExams';
import StudentResults from './pages/student/StudentResults';
import StudentCertificates from './pages/student/StudentCertificates';
import StudentFeePayment from './pages/student/StudentFeePayment';
import StudentAttendance from './pages/student/StudentAttendance';
import StudentMaterials from './pages/student/StudentMaterials';
import StudentNotifications from './pages/student/StudentNotifications';
import StudentSupport from './pages/student/StudentSupport';
import StudentSettings from './pages/student/StudentSettings';

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode; allowedRoles?: string[] }) => {
  const { user, isAuthenticated } = useAuthStore();
  
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }
  
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuthStore();

  const handleLogout = () => {
    logout();
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
      {isAuthenticated && <Navbar user={user} onLogout={handleLogout} currentPage={getCurrentPage()} />}
      
      <div className="flex">
        {isAdminRoute && currentUser && <AdminSidebar />}
        {isTeacherRoute && currentUser && <TeacherSidebar />}
        {isStudentRoute && currentUser && <StudentSidebar />}
        
        <main className={`flex-1 ${showSidebar ? 'lg:ml-64' : ''}`}>
          <Routes>
        {/* Auth Routes */}
        <Route path="/" element={isAuthenticated ? <Navigate to={user?.role === 'student' ? '/student/dashboard' : '/dashboard'} replace /> : <LoginPage />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to={user?.role === 'student' ? '/student/dashboard' : '/dashboard'} replace /> : <LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/register-franchise" element={<RegisterFranchisePage />} />
        <Route path="/profile" element={<ProtectedRoute><UserProfilePage user={user} /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['admin', 'franchise', 'teacher']}><DashboardPage user={user} /></ProtectedRoute>} />

        {/* Role & Permission Management (Admin Only) */}
        <Route path="/admin/roles" element={<ProtectedRoute allowedRoles={['admin']}><RoleList /></ProtectedRoute>} />
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

<<<<<<< Updated upstream
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
=======
        {/* Batch Management */}
        <Route path="/admin/batch" element={<BatchList />} />
        <Route path="/admin/batch/add" element={<AddEditBatch />} />
        <Route path="/admin/batch/edit/:id" element={<AddEditBatch />} />
        <Route path="/admin/batch/view/:id" element={<BatchDetailsView />} />
        <Route path="/admin/batch/assign/:id" element={<AssignStudents />} />

        {/* Student Enquiries */}
        <Route path="/admin/enquiry" element={<EnquiryList />} />
        <Route path="/admin/enquiry/add" element={<AddEnquiry />} />
        <Route path="/admin/enquiry/view/:id" element={<ViewEnquiry />} />
        <Route path="/admin/enquiry/followup/:id" element={<FollowUpTracker />} />
        <Route path="/admin/enquiry/convert/:id" element={<ConvertToAdmission />} />

        {/* Student Admission */}
        <Route path="/admin/admission" element={<AdmissionList />} />
        <Route path="/admin/admission/add" element={<AddAdmission />} />
        <Route path="/admin/admission/view/:id" element={<ViewAdmission />} />
        <Route path="/admin/admission/roll-number/:id" element={<GenerateRollNumber />} />
        <Route path="/admin/admission/credentials/:id" element={<AssignCredentials />} />
        <Route path="/admin/admission/documents/:id" element={<UploadAdmissionDocuments />} />
        <Route path="/admin/admission/report" element={<AdmissionReport />} />

        {/* Fee Management */}
        <Route path="/admin/fee/dashboard" element={<FeeDashboardPage />} />
        <Route path="/admin/fee/slips" element={<FeeSlipList />} />
        <Route path="/admin/fee/slip/add" element={<AddFeeSlip />} />
        <Route path="/admin/fee/slip/view/:id" element={<ViewFeeSlip />} />
        <Route path="/admin/fee/due" element={<DueFeeList />} />
        <Route path="/admin/fee/report" element={<FeeReportPage />} />
        <Route path="/admin/fee/reminder" element={<FeeReminderNotification />} />

        {/* Online Live Class */}
        <Route path="/admin/live-class" element={<LiveClassDashboard />} />
        <Route path="/admin/live-class/youtube/add" element={<AddYouTubeClass />} />
        <Route path="/admin/live-class/zoom/add" element={<AddZoomMeetClass />} />
        <Route path="/admin/live-class/calendar" element={<ClassCalendarPage />} />
        <Route path="/admin/live-class/join/:id" element={<JoinClass />} />
        <Route path="/admin/live-class/recordings" element={<ClassRecordings />} />

        {/* Online Exam Module */}
        <Route path="/admin/exam/questions" element={<QuestionBank />} />
        <Route path="/admin/exam/question/add" element={<AddQuestion />} />
        <Route path="/admin/exam/question/edit/:id" element={<AddQuestion />} />
        <Route path="/admin/exam/question/import" element={<ImportQuestion />} />
        <Route path="/admin/exam" element={<ExamList />} />
        <Route path="/admin/exam/add" element={<AddExam />} />
        <Route path="/admin/exam/edit/:id" element={<AddExam />} />
        <Route path="/admin/exam/view/:id" element={<ExamResult />} />
        <Route path="/admin/exam/admit-card/:examId" element={<AdmitCardGenerator />} />
        <Route path="/admin/exam/result/:examId" element={<ExamResult />} />
        <Route path="/admin/exam/analytics/:examId" element={<ExamAnalyticsPage />} />
        <Route path="/student/exam/ongoing" element={<OngoingExams />} />
        <Route path="/student/exam/completed" element={<CompletedExams />} />

        {/* Certificate & Marksheet */}
        <Route path="/admin/certificate" element={<CertificateList />} />
        <Route path="/admin/certificate/generate" element={<CertificateGenerator />} />
        <Route path="/admin/marksheet/generate" element={<MarksheetGenerator />} />
        <Route path="/admin/certificate/view/:type/:id" element={<ViewDownload />} />

        {/* Staff Management */}
        <Route path="/admin/staff" element={<StaffList />} />
        <Route path="/admin/staff/add" element={<AddStaff />} />
        <Route path="/admin/staff/edit/:id" element={<EditStaff />} />
        <Route path="/admin/staff/view/:id" element={<AddStaff />} />
        <Route path="/admin/staff/assign-role/:id" element={<AssignRole />} />
        <Route path="/admin/staff/report" element={<StaffReport />} />

        {/* Attendance */}
        <Route path="/admin/attendance/student" element={<StudentAttendancePage />} />
        <Route path="/admin/attendance/mark" element={<MarkAttendance />} />
        <Route path="/admin/attendance/report" element={<AttendanceReportPage />} />
        <Route path="/admin/attendance/staff" element={<StaffAttendancePage />} />
        <Route path="/admin/attendance/staff/mark" element={<MarkStaffAttendance />} />
        <Route path="/admin/attendance/calendar" element={<AttendanceCalendar />} />

        {/* Income & Expenses */}
        <Route path="/admin/finance/dashboard" element={<FinanceDashboard />} />
        <Route path="/admin/finance/income" element={<IncomeList />} />
        <Route path="/admin/finance/income/add" element={<AddIncome />} />
        <Route path="/admin/finance/income/edit/:id" element={<AddIncome />} />
        <Route path="/admin/finance/expense" element={<ExpenseList />} />
        <Route path="/admin/finance/expense/add" element={<AddExpense />} />
        <Route path="/admin/finance/expense/edit/:id" element={<AddExpense />} />
        <Route path="/admin/finance/report" element={<FinanceReport />} />

        {/* Notifications */}
        <Route path="/admin/notification" element={<NotificationList />} />
        <Route path="/admin/notification/send" element={<SendNotification />} />
        <Route path="/admin/notification/templates" element={<NotificationTemplates />} />
        <Route path="/admin/notification/template/add" element={<SendNotification />} />
        <Route path="/admin/notification/template/edit/:id" element={<SendNotification />} />
        <Route path="/admin/notification/settings" element={<NotificationSettings />} />
        <Route path="/admin/notification/history" element={<NotificationHistory />} />
        <Route path="/admin/notification/queue" element={<NotificationQueue />} />

        {/* Reports & Analysis */}
        <Route path="/admin/reports/student" element={<StudentReport />} />
        <Route path="/admin/reports/fee" element={<FeeReport />} />
        <Route path="/admin/reports/attendance" element={<AttendanceReport />} />
        <Route path="/admin/reports/exam" element={<ExamReport />} />
        <Route path="/admin/reports/analytics" element={<AnalyticsDashboard />} />

        {/* Course Sales */}
        <Route path="/admin/sales" element={<CourseSalesList />} />
        <Route path="/admin/sales/add" element={<AddSale />} />
        <Route path="/admin/sales/view/:id" element={<AddSale />} />
        <Route path="/admin/sales/report" element={<SalesReport />} />

        {/* Support Center */}
        <Route path="/admin/support" element={<TicketList />} />
        <Route path="/admin/support/ticket/create" element={<CreateTicket />} />
        <Route path="/admin/support/ticket/view/:id" element={<ViewTicket />} />
        <Route path="/admin/support/management" element={<TicketManagement />} />

        {/* Integrations */}
        <Route path="/admin/integration" element={<IntegrationList />} />
        <Route path="/admin/integration/add" element={<AddIntegration />} />
        <Route path="/admin/integration/edit/:id" element={<AddIntegration />} />
        <Route path="/admin/integration/settings/:id" element={<IntegrationSettings />} />
        <Route path="/admin/integration/logs/:id" element={<IntegrationLogs />} />

        {/* Front CMS */}
        <Route path="/admin/cms/pages" element={<PageList />} />
        <Route path="/admin/cms/page/add" element={<AddEditPage />} />
        <Route path="/admin/cms/page/edit/:id" element={<AddEditPage />} />
        <Route path="/admin/cms/page/preview/:id" element={<PagePreview />} />
        <Route path="/admin/cms/menu" element={<MenuManagement />} />
        <Route path="/admin/cms/banners" element={<BannerManagement />} />
        <Route path="/admin/cms/settings" element={<CMSSettings />} />

        {/* Student Panel */}
        <Route path="/student/dashboard" element={<ProtectedRoute allowedRoles={['student']}><StudentDashboard /></ProtectedRoute>} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/courses" element={<StudentCourses />} />
        <Route path="/student/live-classes" element={<StudentLiveClasses />} />
        <Route path="/student/exams" element={<StudentExams />} />
        <Route path="/student/exam/:id" element={<StudentExams />} />
        <Route path="/student/exam/result/:id" element={<StudentResults />} />
        <Route path="/student/results" element={<StudentResults />} />
        <Route path="/student/certificates" element={<StudentCertificates />} />
        <Route path="/student/fees" element={<StudentFeePayment />} />
        <Route path="/student/attendance" element={<StudentAttendance />} />
        <Route path="/student/materials" element={<StudentMaterials />} />
        <Route path="/student/notifications" element={<StudentNotifications />} />
        <Route path="/student/support" element={<StudentSupport />} />
        <Route path="/student/support/create" element={<CreateTicket />} />
        <Route path="/student/support/ticket/:id" element={<ViewTicket />} />
        <Route path="/student/settings" element={<StudentSettings />} />

        <Route path="*" element={<LoginPage />} />
      </Routes>
>>>>>>> Stashed changes
    </div>
  );
};

export default App;
