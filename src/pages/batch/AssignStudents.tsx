import React, { useState } from 'react';
import { ArrowLeft, Save, Users, Search, Plus, X } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { BatchStudent } from '../../types/Batch';

const AssignStudents: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  // Mock available students
  const [availableStudents] = useState([
    { id: '1', name: 'John Doe', rollNumber: 'ST001', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', rollNumber: 'ST002', email: 'jane@example.com' },
    { id: '3', name: 'Bob Johnson', rollNumber: 'ST003', email: 'bob@example.com' }
  ]);

  const filteredStudents = availableStudents.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleStudent = (studentId: string) => {
    setSelectedStudents(prev =>
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Assigning students:', selectedStudents);
    navigate(`/admin/batch/view/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate(`/admin/batch/view/${id}`)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Users className="text-indigo-600" size={32} />
                Assign Students to Batch
              </h1>
              <p className="text-gray-600 mt-2">Search & add students</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search students by name or roll number..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div className="border border-gray-200 rounded-lg p-4 max-h-96 overflow-y-auto">
              {filteredStudents.map((student) => (
                <label
                  key={student.id}
                  className={`flex items-center justify-between p-4 border-2 rounded-lg mb-2 cursor-pointer transition ${
                    selectedStudents.includes(student.id)
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(student.id)}
                      onChange={() => toggleStudent(student.id)}
                      className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{student.name}</p>
                      <p className="text-sm text-gray-600">Roll: {student.rollNumber} | {student.email}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            {selectedStudents.length > 0 && (
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-indigo-900 mb-2">
                Selected Students: {selectedStudents.length}
              </p>
            </div>)}

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate(`/admin/batch/view/${id}`)}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={selectedStudents.length === 0}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save size={20} />
                Assign Students ({selectedStudents.length})
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignStudents;



