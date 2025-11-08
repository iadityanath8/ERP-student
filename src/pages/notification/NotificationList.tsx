import React, { useState } from 'react';
import { Plus, Bell, Search, Filter, Send, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Notification } from '../../types/Notification';

const NotificationList: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  
  const [notifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Fee Payment Reminder',
      message: 'Your fee payment is due on November 15, 2024',
      type: 'fee_reminder',
      recipientType: 'student',
      recipientId: '1',
      recipientName: 'Rajesh Kumar',
      sendDate: '2024-11-07T10:00:00',
      status: 'sent',
      createdAt: '2024-11-07'
    }
  ]);

  const filteredNotifications = notifications.filter(notif =>
    notif.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notif.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Bell className="text-indigo-600" size={32} />
                Notification List
              </h1>
              <p className="text-gray-600 mt-2">All notifications</p>
            </div>
            <button
              onClick={() => navigate('/admin/notification/send')}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              <Plus size={20} />
              Send Notification
            </button>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notifications..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="fee_reminder">Fee Reminder</option>
              <option value="exam">Exam</option>
              <option value="class">Class</option>
              <option value="general">General</option>
            </select>
          </div>

          <div className="space-y-4">
            {filteredNotifications.map((notif) => (
              <div key={notif.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{notif.title}</h3>
                    <p className="text-gray-700 mb-3">{notif.message}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>To: {notif.recipientName}</span>
                      <span>Type: {notif.type}</span>
                      <span>Sent: {new Date(notif.sendDate).toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      notif.status === 'sent' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {notif.status}
                    </span>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationList;



