import React, { useState } from 'react';
import { ArrowLeft, Save, Calendar, CheckCircle2, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MarkStaffAttendance: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendance, setAttendance] = useState<Record<string, 'present' | 'absent'>>({});

  const [staff] = useState([
    { id: '1', name: 'Dr. John Smith', employeeId: 'EMP001' },
    { id: '2', name: 'Dr. Jane Doe', employeeId: 'EMP002' }
  ]);

  const toggleAttendance = (staffId: string, status: 'present' | 'absent') => {
    setAttendance(prev => ({
      ...prev,
      [staffId]: prev[staffId] === status ? 'absent' : status
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Marking staff attendance:', { selectedDate, attendance });
    navigate('/admin/attendance/staff');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/admin/attendance/staff')}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Mark Staff Attendance</h1>
              <p className="text-gray-600 mt-2">Daily entry</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Mark Attendance for Staff</h3>
              <div className="space-y-3">
                {staff.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">{member.name}</p>
                      <p className="text-sm text-gray-600">ID: {member.employeeId}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => toggleAttendance(member.id, 'present')}
                        className={`p-2 rounded-lg transition ${
                          attendance[member.id] === 'present'
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <CheckCircle2 size={20} />
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleAttendance(member.id, 'absent')}
                        className={`p-2 rounded-lg transition ${
                          attendance[member.id] === 'absent'
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <XCircle size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/admin/attendance/staff')}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
              >
                <Save size={20} />
                Save Attendance
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MarkStaffAttendance;



