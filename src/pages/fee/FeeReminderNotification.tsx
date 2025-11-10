import React, { useState } from 'react';
import { Send, Mail, MessageSquare, Phone, CheckCircle2 } from 'lucide-react';
import type { FeeReminder } from '../../types/Fee';

const FeeReminderNotification: React.FC = () => {
  const [reminderType, setReminderType] = useState<'email' | 'sms' | 'whatsapp'>('email');
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const [dueFees] = useState([
    { id: '1', studentId: '1', studentName: 'John Doe', rollNumber: 'BCA2024002', amount: 5000, dueDate: '2024-11-05' },
    { id: '2', studentId: '2', studentName: 'Jane Smith', rollNumber: 'BCA2024003', amount: 5000, dueDate: '2024-11-10' }
  ]);

  const toggleStudent = (studentId: string) => {
    setSelectedStudents(prev =>
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSend = () => {
    console.log('Sending reminders:', { reminderType, selectedStudents, message });
    alert('Reminders sent successfully!');
  };

  const getReminderIcon = () => {
    switch (reminderType) {
      case 'email': return <Mail className="text-blue-600" size={24} />;
      case 'sms': return <MessageSquare className="text-green-600" size={24} />;
      case 'whatsapp': return <Phone className="text-green-600" size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Fee Reminder Notification</h1>
            <p className="text-gray-600 mt-2">Send alert (email/sms)</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <button
              onClick={() => setReminderType('email')}
              className={`p-6 border-2 rounded-lg transition ${
                reminderType === 'email' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Mail className="mx-auto mb-2 text-blue-600" size={32} />
              <p className="font-semibold text-gray-900">Email</p>
            </button>
            <button
              onClick={() => setReminderType('sms')}
              className={`p-6 border-2 rounded-lg transition ${
                reminderType === 'sms' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <MessageSquare className="mx-auto mb-2 text-green-600" size={32} />
              <p className="font-semibold text-gray-900">SMS</p>
            </button>
            <button
              onClick={() => setReminderType('whatsapp')}
              className={`p-6 border-2 rounded-lg transition ${
                reminderType === 'whatsapp' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Phone className="mx-auto mb-2 text-green-600" size={32} />
              <p className="font-semibold text-gray-900">WhatsApp</p>
            </button>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Message Template</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter reminder message..."
            />
            <p className="mt-2 text-sm text-gray-600">
              Available variables: {'{studentName}'}, {'{amount}'}, {'{dueDate}'}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Students with Due Fees</h2>
            <div className="border border-gray-200 rounded-lg p-4 max-h-96 overflow-y-auto">
              {dueFees.map((fee) => (
                <label
                  key={fee.id}
                  className={`flex items-center justify-between p-4 border-2 rounded-lg mb-2 cursor-pointer transition ${
                    selectedStudents.includes(fee.studentId)
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div>
                    <p className="font-semibold text-gray-900">{fee.studentName}</p>
                    <p className="text-sm text-gray-600">Roll: {fee.rollNumber} | Amount: ₹{fee.amount.toLocaleString()}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(fee.studentId)}
                    onChange={() => toggleStudent(fee.studentId)}
                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                </label>
              ))}
            </div>
          </div>

          {selectedStudents.length > 0 && (
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold text-indigo-900">
                {selectedStudents.length} student(s) selected for {reminderType.toUpperCase()} reminder
              </p>
            </div>
          )}

          <button
            onClick={handleSend}
            disabled={selectedStudents.length === 0 || !message}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
            Send Reminders ({selectedStudents.length})
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeeReminderNotification;



