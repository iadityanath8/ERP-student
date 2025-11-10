import React, { useState } from 'react';
import { BookOpen, Calendar, FileText, DollarSign, Bell, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { StudentDashboard } from '../../types/StudentPanel';

const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();

  // Mock data
  const [dashboard] = useState<StudentDashboard>({
    enrolledCourses: 3,
    upcomingClasses: 5,
    pendingExams: 2,
    pendingFees: 1,
    attendancePercentage: 85,
    recentAnnouncements: [
      { id: '1', title: 'New Course Available', date: '2024-01-15' },
      { id: '2', title: 'Exam Schedule Released', date: '2024-01-14' },
    ],
    upcomingEvents: [
      { id: '1', title: 'Live Class - Mathematics', date: '2024-01-16T10:00:00Z' },
      { id: '2', title: 'Assignment Due', date: '2024-01-17T23:59:59Z' },
    ],
    recentActivity: [
      {
        id: '1',
        type: 'class',
        title: 'Attended Mathematics Class',
        description: 'Completed live class session',
        date: '2024-01-15T10:00:00Z',
        status: 'completed',
      },
      {
        id: '2',
        type: 'exam',
        title: 'Mathematics Exam',
        description: 'Exam scheduled for tomorrow',
        date: '2024-01-16T10:00:00Z',
        status: 'upcoming',
      },
    ],
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div
          onClick={() => navigate('/student/courses')}
          className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Enrolled Courses</p>
              <p className="text-2xl font-bold text-gray-800">{dashboard.enrolledCourses}</p>
            </div>
            <BookOpen className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div
          onClick={() => navigate('/student/live-classes')}
          className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Upcoming Classes</p>
              <p className="text-2xl font-bold text-gray-800">{dashboard.upcomingClasses}</p>
            </div>
            <Calendar className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div
          onClick={() => navigate('/student/exams')}
          className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Exams</p>
              <p className="text-2xl font-bold text-gray-800">{dashboard.pendingExams}</p>
            </div>
            <FileText className="w-8 h-8 text-orange-500" />
          </div>
        </div>
        <div
          onClick={() => navigate('/student/fees')}
          className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Fees</p>
              <p className="text-2xl font-bold text-gray-800">{dashboard.pendingFees}</p>
            </div>
            <DollarSign className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {dashboard.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'class' ? 'bg-blue-100' :
                    activity.type === 'exam' ? 'bg-orange-100' :
                    'bg-gray-100'
                  }`}>
                    {activity.type === 'class' && <Clock className="w-5 h-5 text-blue-600" />}
                    {activity.type === 'exam' && <FileText className="w-5 h-5 text-orange-600" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{activity.title}</h3>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(activity.date).toLocaleString()}
                    </p>
                  </div>
                  {activity.status && (
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                      activity.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {activity.status}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
            <div className="space-y-3">
              {dashboard.upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-800">{event.title}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleString()}
                    </p>
                  </div>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Attendance */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Attendance</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">
                {dashboard.attendancePercentage}%
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${dashboard.attendancePercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Overall Attendance</p>
            </div>
            <button
              onClick={() => navigate('/student/attendance')}
              className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
            >
              View Details
            </button>
          </div>

          {/* Announcements */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Announcements</h3>
              <Bell className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {dashboard.recentAnnouncements.map((announcement) => (
                <div key={announcement.id} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 text-sm">{announcement.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{announcement.date}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/student/notifications')}
              className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

