import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, Send, Paperclip, User, Clock, Tag } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { SupportTicket, TicketReply } from '../../types/Support';

const ViewTicket: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [replyText, setReplyText] = useState('');

  // Mock data
  const [ticket] = useState<SupportTicket>({
    id: id || '1',
    ticketNumber: 'TKT-001',
    title: 'Unable to access course materials',
    description: 'I cannot download the study materials for my enrolled course. The download button is not working and I get an error message.',
    category: 'technical',
    priority: 'high',
    status: 'open',
    createdBy: 'user1',
    createdByName: 'John Doe',
    studentId: 'std1',
    studentName: 'John Doe',
    replies: [
      {
        id: '1',
        ticketId: id || '1',
        message: 'Thank you for reporting this issue. We are looking into it.',
        repliedBy: 'admin1',
        repliedByName: 'Support Team',
        isInternal: false,
        createdAt: '2024-01-15T11:00:00Z',
      },
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T11:00:00Z',
  });

  const handleReply = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reply submission
    console.log('Sending reply:', replyText);
    setReplyText('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <button
        onClick={() => navigate('/admin/support')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Tickets
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Ticket Details */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{ticket.title}</h1>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{ticket.ticketNumber}</span>
                  <span>•</span>
                  <span>Created {new Date(ticket.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(ticket.status)}`}>
                  {ticket.status}
                </span>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getPriorityColor(ticket.priority)}`}>
                  {ticket.priority}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 whitespace-pre-wrap">{ticket.description}</p>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span className="capitalize">{ticket.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{ticket.createdByName}</span>
              </div>
            </div>
          </div>

          {/* Replies */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Replies</h2>
            <div className="space-y-4">
              {ticket.replies.map((reply) => (
                <div key={reply.id} className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">{reply.repliedByName}</span>
                    <span className="text-sm text-gray-500">
                      {new Date(reply.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-700">{reply.message}</p>
                </div>
              ))}
            </div>

            {/* Reply Form */}
            <form onSubmit={handleReply} className="mt-6">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
                placeholder="Type your reply..."
              />
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                >
                  <Paperclip className="w-5 h-5" />
                  Attach File
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  <Send className="w-5 h-5" />
                  Send Reply
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Ticket Info */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Ticket Information</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-500">Status:</span>
                <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(ticket.status)}`}>
                  {ticket.status}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Priority:</span>
                <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(ticket.priority)}`}>
                  {ticket.priority}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Category:</span>
                <span className="ml-2 text-gray-800 capitalize">{ticket.category}</span>
              </div>
              {ticket.assignedToName && (
                <div>
                  <span className="text-gray-500">Assigned To:</span>
                  <span className="ml-2 text-gray-800">{ticket.assignedToName}</span>
                </div>
              )}
              <div>
                <span className="text-gray-500">Created:</span>
                <span className="ml-2 text-gray-800">
                  {new Date(ticket.createdAt).toLocaleString()}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Last Updated:</span>
                <span className="ml-2 text-gray-800">
                  {new Date(ticket.updatedAt).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg">
                Assign Ticket
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg">
                Change Status
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg">
                Change Priority
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg text-red-600">
                Close Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTicket;

