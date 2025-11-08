import React, { useState } from 'react';
import { Plus, MessageSquare, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { SupportTicket } from '../../types/Support';

const StudentSupport: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'open' | 'in-progress' | 'resolved' | 'closed'>('all');

  // Mock data
  const [tickets] = useState<SupportTicket[]>([
    {
      id: '1',
      ticketNumber: 'TKT-001',
      title: 'Unable to access course materials',
      description: 'I cannot download the study materials for my enrolled course.',
      category: 'technical',
      priority: 'high',
      status: 'open',
      createdBy: 'user1',
      createdByName: 'John Doe',
      replies: [],
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
    },
    {
      id: '2',
      ticketNumber: 'TKT-002',
      title: 'Payment gateway issue',
      description: 'Payment is not processing through Razorpay.',
      category: 'billing',
      priority: 'urgent',
      status: 'in-progress',
      createdBy: 'user1',
      createdByName: 'John Doe',
      assignedTo: 'admin1',
      assignedToName: 'Support Team',
      replies: [],
      createdAt: '2024-01-14T14:30:00Z',
      updatedAt: '2024-01-15T09:00:00Z',
    },
    {
      id: '3',
      ticketNumber: 'TKT-003',
      title: 'Question about exam schedule',
      description: 'When will the exam schedule be released?',
      category: 'academic',
      priority: 'medium',
      status: 'resolved',
      createdBy: 'user1',
      createdByName: 'John Doe',
      replies: [],
      createdAt: '2024-01-10T10:00:00Z',
      updatedAt: '2024-01-12T14:00:00Z',
      resolvedAt: '2024-01-12T14:00:00Z',
    },
  ]);

  const filteredTickets = filter === 'all'
    ? tickets
    : tickets.filter(t => t.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Support Tickets</h1>
        <button
          onClick={() => navigate('/student/support/create')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Create Ticket
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex gap-2">
          {(['all', 'open', 'in-progress', 'resolved', 'closed'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg capitalize ${
                filter === f
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {f.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Tickets List */}
      <div className="space-y-4">
        {filteredTickets.map((ticket) => (
          <div key={ticket.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{ticket.title}</h3>
                  <span className="text-sm text-gray-500">#{ticket.ticketNumber}</span>
                </div>
                <p className="text-gray-600 mb-2">{ticket.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="capitalize">{ticket.category}</span>
                  <span className="capitalize">{ticket.priority} priority</span>
                  <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(ticket.status)}`}>
                {ticket.status}
              </span>
            </div>

            {ticket.replies && ticket.replies.length > 0 && (
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MessageSquare className="w-4 h-4" />
                  <span>{ticket.replies.length} reply(s)</span>
                </div>
              </div>
            )}

            <button
              onClick={() => navigate(`/student/support/ticket/${ticket.id}`)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentSupport;

