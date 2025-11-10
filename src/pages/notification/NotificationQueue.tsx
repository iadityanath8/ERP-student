import React, { useState } from 'react';
import { Play, Pause, Trash2, Clock, Send } from 'lucide-react';
import type { Notification } from '../../types/Notification';

const NotificationQueue: React.FC = () => {
  const [queue] = useState<Notification[]>([
    {
      id: '1',
      title: 'Scheduled Exam Notification',
      message: 'Your exam is scheduled for tomorrow',
      type: 'exam',
      recipientType: 'student',
      recipientId: '1',
      recipientName: 'Rajesh Kumar',
      sendDate: '2024-11-08T09:00:00',
      status: 'pending',
      createdAt: '2024-11-07'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Notification Queue</h1>
            <p className="text-gray-600 mt-2">Scheduled notifications</p>
          </div>

          <div className="space-y-4">
            {queue.map((notif) => (
              <div key={notif.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{notif.title}</h3>
                    <p className="text-gray-700 mb-3">{notif.message}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>Scheduled: {new Date(notif.sendDate).toLocaleString()}</span>
                      </div>
                      <span>To: {notif.recipientName}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition">
                      <Play size={18} />
                    </button>
                    <button className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition">
                      <Pause size={18} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">
                    {notif.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {queue.length === 0 && (
            <div className="text-center py-12">
              <Send className="mx-auto text-gray-400" size={48} />
              <p className="mt-4 text-gray-600">No notifications in queue</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationQueue;



