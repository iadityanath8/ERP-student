import { User, Building2, BarChart3, Users, BookOpen, DollarSign, TrendingUp, Activity } from 'lucide-react';


const DashboardPage = ({ user, onNavigate }: any) => {
    const getDashboardContent = () => {
        switch (user.role) {
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
            case 'student':
                return {
                    title: 'Student Dashboard',
                    stats: [
                        { icon: BookOpen, label: 'Enrolled Courses', value: '4', change: '', color: 'bg-purple-500' },
                        { icon: Activity, label: 'Attendance', value: '92%', change: '+2%', color: 'bg-green-500' },
                        { icon: TrendingUp, label: 'Progress', value: '78%', change: '+5%', color: 'bg-blue-500' },
                        { icon: BarChart3, label: 'Avg Score', value: '85%', change: '+3%', color: 'bg-yellow-500' }
                    ],
                    recentActivity: [
                        'Completed Chapter 5 - React Hooks',
                        'Submitted assignment for JavaScript',
                        'Attended live session on Node.js',
                        'Achieved 95% in latest quiz'
                    ]
                };
            default:
                return {
                    title: 'Instructor Dashboard',
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
        }
    };

    const dashboardContent = getDashboardContent();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{dashboardContent.title}</h1>
                            <p className="text-gray-600 mt-1">Welcome back, {user.name}!</p>
                        </div>
                        <button
                            onClick={() => onNavigate('profile')}
                            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
                        >
                            <User size={20} />
                            Profile
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {dashboardContent.stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-200">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                                    <stat.icon className="text-white" size={24} />
                                </div>
                                {stat.change && (
                                    <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {stat.change}
                                    </span>
                                )}
                            </div>
                            <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.label}</h3>
                            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Recent Activity */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Activity size={24} className="text-indigo-600" />
                            Recent Activity
                        </h2>
                        <div className="space-y-4">
                            {dashboardContent.recentActivity.map((activity, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
                                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                                    <div className="flex-1">
                                        <p className="text-gray-700">{activity}</p>
                                        <p className="text-sm text-gray-500 mt-1">{index + 1} hours ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                        <div className="space-y-3">
                            {user.role === 'admin' && (
                                <>
                                    <button className="w-full px-4 py-3 bg-indigo-50 text-indigo-700 rounded-lg font-semibold hover:bg-indigo-100 transition">
                                        Add New Franchise
                                    </button>
                                    <button className="w-full px-4 py-3 bg-purple-50 text-purple-700 rounded-lg font-semibold hover:bg-purple-100 transition">
                                        Manage Courses
                                    </button>
                                    <button className="w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition">
                                        View Reports
                                    </button>
                                </>
                            )}
                            {user.role === 'franchise' && (
                                <>
                                    <button className="w-full px-4 py-3 bg-green-50 text-green-700 rounded-lg font-semibold hover:bg-green-100 transition">
                                        Enroll Student
                                    </button>
                                    <button className="w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition">
                                        Manage Batches
                                    </button>
                                    <button className="w-full px-4 py-3 bg-purple-50 text-purple-700 rounded-lg font-semibold hover:bg-purple-100 transition">
                                        Generate Invoice
                                    </button>
                                </>
                            )}
                            {user.role === 'student' && (
                                <>
                                    <button className="w-full px-4 py-3 bg-purple-50 text-purple-700 rounded-lg font-semibold hover:bg-purple-100 transition">
                                        Browse Courses
                                    </button>
                                    <button className="w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition">
                                        View Assignments
                                    </button>
                                    <button className="w-full px-4 py-3 bg-green-50 text-green-700 rounded-lg font-semibold hover:bg-green-100 transition">
                                        Attendance Report
                                    </button>
                                </>
                            )}
                            {user.role === 'instructor' && (
                                <>
                                    <button className="w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition">
                                        Create Assignment
                                    </button>
                                    <button className="w-full px-4 py-3 bg-green-50 text-green-700 rounded-lg font-semibold hover:bg-green-100 transition">
                                        Mark Attendance
                                    </button>
                                    <button className="w-full px-4 py-3 bg-purple-50 text-purple-700 rounded-lg font-semibold hover:bg-purple-100 transition">
                                        Upload Material
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Performance Chart Placeholder */}
                <div className="mt-6 bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <BarChart3 size={24} className="text-indigo-600" />
                        Performance Overview
                    </h2>
                    <div className="h-64 bg-linear-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Chart visualization will be displayed here</p>
                    </div>
                </div>
            </main>
        </div>
    );
};


export default DashboardPage;