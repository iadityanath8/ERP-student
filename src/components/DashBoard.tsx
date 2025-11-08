import React, { useEffect } from 'react';
import { User, Building2, BarChart3, Users, BookOpen, DollarSign, TrendingUp, Activity, 
  Shield, Wallet, GraduationCap, ClipboardList, FileText, Calendar, Video, Award, 
  MessageSquare, Globe, Zap, CreditCard, Bell, Menu, Image, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import type { User as UserType } from '../types/User';

interface DashboardPageProps {
  user: UserType | null;
}

interface NavigationCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  link: string;
  color: string;
  bgColor: string;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const getAdminNavigationCards = (): NavigationCard[] => [
    // Role & Permission Management
    { title: 'Role Management', description: 'Manage roles and permissions', icon: Shield, link: '/admin/roles', color: 'text-red-600', bgColor: 'bg-red-50' },
    { title: 'Permissions', description: 'View and manage permissions', icon: Shield, link: '/admin/roles/permissions', color: 'text-red-600', bgColor: 'bg-red-50' },
    
    // Franchise Management
    { title: 'Franchise List', description: 'View all franchises', icon: Building2, link: '/admin/franchise', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { title: 'Add Franchise', description: 'Register new franchise', icon: Building2, link: '/admin/franchise/add', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    
    // Wallet Management
    { title: 'Wallet Overview', description: 'View wallet transactions', icon: Wallet, link: '/admin/wallet', color: 'text-green-600', bgColor: 'bg-green-50' },
    { title: 'Add Amount', description: 'Add amount to franchise', icon: DollarSign, link: '/admin/wallet/add-amount', color: 'text-green-600', bgColor: 'bg-green-50' },
    { title: 'Transactions', description: 'View all transactions', icon: CreditCard, link: '/admin/wallet/transactions', color: 'text-green-600', bgColor: 'bg-green-50' },
    
    // Course Management
    { title: 'Programs', description: 'Manage programs', icon: BookOpen, link: '/admin/course/programs', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { title: 'Courses', description: 'Manage courses', icon: BookOpen, link: '/admin/course', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { title: 'Subjects', description: 'Manage subjects', icon: FileText, link: '/admin/course/subjects', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { title: 'Syllabus', description: 'Manage syllabus', icon: FileText, link: '/admin/course/syllabus', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { title: 'Topics', description: 'Manage topics', icon: ClipboardList, link: '/admin/course/topics', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    
    // Batch Management
    { title: 'Batches', description: 'Manage batches', icon: Users, link: '/admin/batch', color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    
    // Student Management
    { title: 'Enquiries', description: 'View student enquiries', icon: MessageSquare, link: '/admin/enquiry', color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
    { title: 'Admissions', description: 'Manage admissions', icon: GraduationCap, link: '/admin/admission', color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
    
    // Fee Management
    { title: 'Fee Dashboard', description: 'View fee overview', icon: DollarSign, link: '/admin/fee/dashboard', color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
    { title: 'Fee Slips', description: 'Manage fee slips', icon: FileText, link: '/admin/fee/slips', color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
    { title: 'Due Fees', description: 'View due fees', icon: AlertCircle, link: '/admin/fee/due', color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
    
    // Live Classes
    { title: 'Live Classes', description: 'Manage live classes', icon: Video, link: '/admin/live-class', color: 'text-pink-600', bgColor: 'bg-pink-50' },
    { title: 'Class Calendar', description: 'View class schedule', icon: Calendar, link: '/admin/live-class/calendar', color: 'text-pink-600', bgColor: 'bg-pink-50' },
    
    // Exam Management
    { title: 'Question Bank', description: 'Manage questions', icon: FileText, link: '/admin/exam/questions', color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { title: 'Exams', description: 'Manage exams', icon: Award, link: '/admin/exam', color: 'text-orange-600', bgColor: 'bg-orange-50' },
    
    // Certificates
    { title: 'Certificates', description: 'Manage certificates', icon: Award, link: '/admin/certificate', color: 'text-amber-600', bgColor: 'bg-amber-50' },
    
    // Staff Management
    { title: 'Staff', description: 'Manage staff', icon: Users, link: '/admin/staff', color: 'text-cyan-600', bgColor: 'bg-cyan-50' },
    
    // Attendance
    { title: 'Student Attendance', description: 'Manage attendance', icon: ClipboardList, link: '/admin/attendance/student', color: 'text-teal-600', bgColor: 'bg-teal-50' },
    { title: 'Staff Attendance', description: 'View staff attendance', icon: Users, link: '/admin/attendance/staff', color: 'text-teal-600', bgColor: 'bg-teal-50' },
    
    // Finance
    { title: 'Income', description: 'Manage income', icon: TrendingUp, link: '/admin/finance/income', color: 'text-lime-600', bgColor: 'bg-lime-50' },
    { title: 'Expenses', description: 'Manage expenses', icon: DollarSign, link: '/admin/finance/expense', color: 'text-lime-600', bgColor: 'bg-lime-50' },
    
    // Notifications
    { title: 'Notifications', description: 'Send notifications', icon: Bell, link: '/admin/notification', color: 'text-violet-600', bgColor: 'bg-violet-50' },
    
    // Reports
    { title: 'Reports', description: 'View analytics', icon: BarChart3, link: '/admin/reports/analytics', color: 'text-slate-600', bgColor: 'bg-slate-50' },
    
    // Sales
    { title: 'Course Sales', description: 'View sales', icon: DollarSign, link: '/admin/sales', color: 'text-rose-600', bgColor: 'bg-rose-50' },
    
    // Support
    { title: 'Support Tickets', description: 'Manage tickets', icon: MessageSquare, link: '/admin/support', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    
    // Integrations
    { title: 'Integrations', description: 'Manage integrations', icon: Zap, link: '/admin/integration', color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    
    // CMS
    { title: 'CMS Pages', description: 'Manage website pages', icon: Globe, link: '/admin/cms/pages', color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
    { title: 'CMS Menu', description: 'Manage navigation', icon: Menu, link: '/admin/cms/menu', color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
    { title: 'CMS Banners', description: 'Manage banners', icon: Image, link: '/admin/cms/banners', color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
  ];

  const getFranchiseNavigationCards = (): NavigationCard[] => [
    { title: 'Students', description: 'Manage students', icon: Users, link: '/admin/admission', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { title: 'Batches', description: 'Manage batches', icon: Users, link: '/admin/batch', color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    { title: 'Courses', description: 'Manage courses', icon: BookOpen, link: '/admin/course', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { title: 'Fee Management', description: 'Manage fees', icon: DollarSign, link: '/admin/fee/dashboard', color: 'text-green-600', bgColor: 'bg-green-50' },
    { title: 'Live Classes', description: 'Manage classes', icon: Video, link: '/admin/live-class', color: 'text-pink-600', bgColor: 'bg-pink-50' },
    { title: 'Exams', description: 'Manage exams', icon: Award, link: '/admin/exam', color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { title: 'Attendance', description: 'Manage attendance', icon: ClipboardList, link: '/admin/attendance/student', color: 'text-teal-600', bgColor: 'bg-teal-50' },
    { title: 'Staff', description: 'Manage staff', icon: Users, link: '/admin/staff', color: 'text-cyan-600', bgColor: 'bg-cyan-50' },
    { title: 'Wallet', description: 'View wallet', icon: Wallet, link: '/admin/wallet', color: 'text-green-600', bgColor: 'bg-green-50' },
    { title: 'Reports', description: 'View reports', icon: BarChart3, link: '/admin/reports/analytics', color: 'text-slate-600', bgColor: 'bg-slate-50' },
  ];

  const getTeacherNavigationCards = (): NavigationCard[] => [
    { title: 'My Classes', description: 'View my classes', icon: BookOpen, link: '/admin/live-class', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { title: 'Students', description: 'View students', icon: Users, link: '/admin/admission', color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    { title: 'Attendance', description: 'Mark attendance', icon: ClipboardList, link: '/admin/attendance/mark', color: 'text-teal-600', bgColor: 'bg-teal-50' },
    { title: 'Exams', description: 'Manage exams', icon: Award, link: '/admin/exam', color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { title: 'Question Bank', description: 'Manage questions', icon: FileText, link: '/admin/exam/questions', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { title: 'Study Materials', description: 'Upload materials', icon: FileText, link: '/admin/course/topics', color: 'text-pink-600', bgColor: 'bg-pink-50' },
  ];

  const getNavigationCards = (): NavigationCard[] => {
    switch (user?.role) {
      case 'admin':
        return getAdminNavigationCards();
      case 'franchise':
        return getFranchiseNavigationCards();
      case 'teacher':
        return getTeacherNavigationCards();
      default:
        return [];
    }
  };

  const getDashboardContent = () => {
    switch (user?.role) {
      case 'admin':
        return {
          title: 'Admin Dashboard',
          stats: [
            { icon: Building2, label: 'Total Franchises', value: '48', change: '+12%', color: 'bg-blue-500' },
            { icon: Users, label: 'Total Students', value: '2,847', change: '+18%', color: 'bg-green-500' },
            { icon: BookOpen, label: 'Active Courses', value: '127', change: '+5%', color: 'bg-purple-500' },
            { icon: DollarSign, label: 'Total Revenue', value: '₹45.2L', change: '+23%', color: 'bg-yellow-500' }
          ],
          recentActivity: [
            'New franchise registered in Mumbai',
            '15 students enrolled today',
            'Course "Web Development" updated',
            'Payment received from Delhi franchise'
          ]
        };
      case 'franchise':
        return {
          title: 'Franchise Dashboard',
          stats: [
            { icon: Users, label: 'Total Students', value: '142', change: '+8%', color: 'bg-green-500' },
            { icon: BookOpen, label: 'Active Courses', value: '12', change: '+2%', color: 'bg-purple-500' },
            { icon: TrendingUp, label: 'Monthly Revenue', value: '₹2.8L', change: '+15%', color: 'bg-blue-500' },
            { icon: Activity, label: 'Avg Attendance', value: '87%', change: '+3%', color: 'bg-yellow-500' }
          ],
          recentActivity: [
            '5 new students enrolled this week',
            'React.js batch completed',
            'Payment processed successfully',
            'New instructor joined the team'
          ]
        };
      case 'teacher':
        return {
          title: 'Teacher Dashboard',
          stats: [
            { icon: Users, label: 'Total Students', value: '89', change: '+6%', color: 'bg-green-500' },
            { icon: BookOpen, label: 'Courses Teaching', value: '3', change: '', color: 'bg-purple-500' },
            { icon: Activity, label: 'Classes This Week', value: '12', change: '', color: 'bg-blue-500' },
            { icon: BarChart3, label: 'Avg Rating', value: '4.8', change: '+0.2', color: 'bg-yellow-500' }
          ],
          recentActivity: [
            'Completed Python lecture',
            'Graded 25 assignments',
            'Scheduled doubt-clearing session',
            'Received positive feedback'
          ]
        };
      default:
        return {
          title: 'Dashboard',
          stats: [
            { icon: Users, label: 'Total Students', value: '0', change: '', color: 'bg-green-500' },
            { icon: BookOpen, label: 'Active Courses', value: '0', change: '', color: 'bg-purple-500' },
            { icon: Activity, label: 'Activity', value: '0', change: '', color: 'bg-blue-500' },
            { icon: BarChart3, label: 'Rating', value: '0', change: '', color: 'bg-yellow-500' }
          ],
          recentActivity: [
            'No recent activity',
            'No recent activity',
            'No recent activity',
            'No recent activity'
          ]
        };
    }
  };

  const dashboardContent = getDashboardContent();
  const navigationCards = getNavigationCards();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{dashboardContent.title}</h1>
              <p className="text-gray-600 mt-1">Welcome back, {user?.name}!</p>
            </div>
            <Link
              to="/profile"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 text-sm sm:text-base"
            >
              <User size={20} />
              Profile
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {dashboardContent.stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center`}>
                  <stat.icon className="text-white" size={20} />
                </div>
                {stat.change && (
                  <span className={`text-xs sm:text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                )}
              </div>
              <h3 className="text-gray-600 text-xs sm:text-sm font-medium mb-1">{stat.label}</h3>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Navigation Cards Grid */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Access</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {navigationCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Link
                  key={index}
                  to={card.link}
                  className={`${card.bgColor} rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-all duration-200 hover:scale-105`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`${card.color} p-2 sm:p-3 rounded-lg bg-white`}>
                      <Icon className={card.color} size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{card.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{card.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity size={20} className="text-indigo-600" />
              Recent Activity
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {dashboardContent.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-700">{activity}</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{index + 1} hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-2 sm:space-y-3">
              {user?.role === 'admin' && (
                <>
                  <button onClick={() => navigate('/admin/franchise/add')} className="w-full px-4 py-2 sm:py-3 bg-indigo-50 text-indigo-700 rounded-lg font-semibold hover:bg-indigo-100 transition text-sm sm:text-base">
                    Add New Franchise
                  </button>
                  <button onClick={() => navigate('/admin/course/add')} className="w-full px-4 py-2 sm:py-3 bg-purple-50 text-purple-700 rounded-lg font-semibold hover:bg-purple-100 transition text-sm sm:text-base">
                    Manage Courses
                  </button>
                  <button onClick={() => navigate('/admin/reports/analytics')} className="w-full px-4 py-2 sm:py-3 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition text-sm sm:text-base">
                    View Reports
                  </button>
                </>
              )}
              {user?.role === 'franchise' && (
                <>
                  <button onClick={() => navigate('/admin/admission/add')} className="w-full px-4 py-2 sm:py-3 bg-green-50 text-green-700 rounded-lg font-semibold hover:bg-green-100 transition text-sm sm:text-base">
                    Enroll Student
                  </button>
                  <button onClick={() => navigate('/admin/batch/add')} className="w-full px-4 py-2 sm:py-3 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition text-sm sm:text-base">
                    Manage Batches
                  </button>
                  <button onClick={() => navigate('/admin/fee/slip/add')} className="w-full px-4 py-2 sm:py-3 bg-purple-50 text-purple-700 rounded-lg font-semibold hover:bg-purple-100 transition text-sm sm:text-base">
                    Generate Invoice
                  </button>
                </>
              )}
              {user?.role === 'teacher' && (
                <>
                  <button onClick={() => navigate('/admin/live-class/zoom/add')} className="w-full px-4 py-2 sm:py-3 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition text-sm sm:text-base">
                    Create Class
                  </button>
                  <button onClick={() => navigate('/admin/attendance/mark')} className="w-full px-4 py-2 sm:py-3 bg-green-50 text-green-700 rounded-lg font-semibold hover:bg-green-100 transition text-sm sm:text-base">
                    Mark Attendance
                  </button>
                  <button onClick={() => navigate('/admin/exam/question/add')} className="w-full px-4 py-2 sm:py-3 bg-purple-50 text-purple-700 rounded-lg font-semibold hover:bg-purple-100 transition text-sm sm:text-base">
                    Add Question
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;