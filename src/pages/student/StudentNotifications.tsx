import React, { useState } from 'react';
import { Bell, FileText, AlertCircle, DollarSign, Video, Info } from 'lucide-react';

const StudentNotifications: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  // Mock data
  const [notifications] = useState([
    {
      id: '1',
      title: 'New Assignment Posted',
      message: 'Mathematics assignment has been posted. Due date: January 20, 2024',
      type: 'assignment',
      isRead: false,
      createdAt: '2024-01-15T10:00:00Z',
    },
    {
      id: '2',
      title: 'Exam Schedule Released',
      message: 'Mid-term exam schedule has been released. Check your exam calendar.',
      type: 'exam',
      isRead: false,
      createdAt: '2024-01-14T14:00:00Z',
    },
    {
      id: '3',
      title: 'Fee Payment Reminder',
      message: 'Your fee payment for January 2024 is due on January 31, 2024',
      type: 'fee',
      isRead: true,
      createdAt: '2024-01-13T09:00:00Z',
    },
    {
      id: '4',
      title: 'Live Class Scheduled',
      message: 'Physics live class scheduled for tomorrow at 10:00 AM',
      type: 'class',
      isRead: true,
      createdAt: '2024-01-12T16:00:00Z',
    },
  ]);

  const filteredNotifications = filter === 'all'
    ? notifications
    : filter === 'unread'
    ? notifications.filter(n => !n.isRead)
    : notifications.filter(n => n.isRead);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'assignment': return <FileText className="w-5 h-5 text-blue-500" />;
      case 'exam': return <AlertCircle className="w-5 h-5 text-orange-500" />;
      case 'fee': return <DollarSign className="w-5 h-5 text-red-500" />;
      case 'class': return <Video className="w-5 h-5 text-green-500" />;
      default: return <Info className="w-5 h-5 text-gray-500" />;
    }
  };

  const markAsRead = (id: string) => {
    // Handle mark as read
    console.log('Mark as read:', id);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>
        <div className="flex items-center gap-2">
          <Bell className="w-6 h-6 text-gray-500" />
          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
            {notifications.filter(n => !n.isRead).length}
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex gap-2">
          {(['all', 'unread', 'read'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg capitalize ${
                filter === f
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-lg shadow p-6 ${
              !notification.isRead ? 'border-l-4 border-blue-500' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1">
                {getTypeIcon(notification.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`font-semibold text-gray-800 ${!notification.isRead ? 'font-bold' : ''}`}>
                    {notification.title}
                  </h3>
                  {!notification.isRead && (
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  )}
                </div>
                <p className="text-gray-600 mb-2">{notification.message}</p>
                <p className="text-xs text-gray-500">
                  {new Date(notification.createdAt).toLocaleString()}
                </p>
              </div>
              {!notification.isRead && (
                <button
                  onClick={() => markAsRead(notification.id)}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Mark as read
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentNotifications;

