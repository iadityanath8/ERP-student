import React, { useState } from 'react';
import { Plus, Edit, Trash2, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotificationTemplates: React.FC = () => {
  const navigate = useNavigate();
  const [templates] = useState([
    {
      id: '1',
      name: 'Fee Payment Reminder',
      type: 'fee_reminder',
      title: 'Fee Payment Reminder',
      message: 'Dear {studentName}, your fee payment of ₹{amount} is due on {dueDate}. Please make the payment at your earliest convenience.',
      variables: ['studentName', 'amount', 'dueDate']
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Notification Templates</h1>
              <p className="text-gray-600 mt-2">Pre-defined templates</p>
            </div>
            <button
              onClick={() => navigate('/admin/notification/template/add')}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              <Plus size={20} />
              Add Template
            </button>
          </div>

          <div className="space-y-4">
            {templates.map((template) => (
              <div key={template.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="text-indigo-600" size={24} />
                      <h3 className="text-xl font-bold text-gray-900">{template.name}</h3>
                      <span className="px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full">
                        {template.type}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{template.message}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>Variables: {template.variables.join(', ')}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/admin/notification/template/edit/${template.id}`)}
                      className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                    >
                      <Edit size={18} />
                    </button>
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

export default NotificationTemplates;



