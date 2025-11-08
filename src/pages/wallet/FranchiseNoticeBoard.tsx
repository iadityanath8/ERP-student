import React, { useState } from 'react';
import { Bell, AlertCircle, ExternalLink, Calendar } from 'lucide-react';
import type { Notice } from '../../types/Wallet';

const FranchiseNoticeBoard: React.FC = () => {
  // Mock data
  const [notices] = useState<Notice[]>([
    {
      id: '1',
      title: 'Monthly Fee Collection Reminder',
      content: 'All franchises are requested to complete monthly fee collection by 15th of each month.',
      link: '/admin/fees',
      priority: 'high',
      createdAt: '2024-11-05',
      expiresAt: '2024-11-15',
      isActive: true
    },
    {
      id: '2',
      title: 'New Course Program Launch',
      content: 'We are excited to announce the launch of our new BCA program starting next semester.',
      link: '/admin/courses',
      priority: 'medium',
      createdAt: '2024-11-03',
      isActive: true
    },
    {
      id: '3',
      title: 'System Maintenance Notice',
      content: 'Scheduled maintenance on November 10th from 2 AM to 4 AM. System will be temporarily unavailable.',
      priority: 'low',
      createdAt: '2024-11-01',
      expiresAt: '2024-11-10',
      isActive: true
    }
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="text-indigo-600" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Franchise Notice Board</h1>
              <p className="text-gray-600 mt-2">List of notices with links</p>
            </div>
          </div>

          <div className="space-y-4">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className={`border-2 rounded-lg p-6 ${getPriorityColor(notice.priority)}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{notice.title}</h3>
                      <p className="text-gray-700 mb-3">{notice.content}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    notice.priority === 'high' ? 'bg-red-200 text-red-900' :
                    notice.priority === 'medium' ? 'bg-yellow-200 text-yellow-900' :
                    'bg-blue-200 text-blue-900'
                  }`}>
                    {notice.priority.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-current border-opacity-30">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>Posted: {new Date(notice.createdAt).toLocaleDateString()}</span>
                    </div>
                    {notice.expiresAt && (
                      <span>Expires: {new Date(notice.expiresAt).toLocaleDateString()}</span>
                    )}
                  </div>
                  {notice.link && (
                    <a
                      href={notice.link}
                      className="flex items-center gap-2 text-sm font-semibold hover:underline"
                    >
                      View Details
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {notices.length === 0 && (
            <div className="text-center py-12">
              <Bell className="mx-auto text-gray-400" size={48} />
              <p className="mt-4 text-gray-600">No notices available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FranchiseNoticeBoard;

