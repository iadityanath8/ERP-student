import React, { useState } from 'react';
import { Plus, Edit, Eye, Trash2, Search, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Program } from '../../types/Course';

const ProgramList: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data
  const [programs] = useState<Program[]>([
    {
      id: '1',
      name: 'Bachelor of Computer Applications',
      code: 'BCA',
      description: '3-year undergraduate program in computer applications',
      duration: 36,
      category: 'Undergraduate',
      isActive: true,
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'Master of Computer Applications',
      code: 'MCA',
      description: '2-year postgraduate program in computer applications',
      duration: 24,
      category: 'Postgraduate',
      isActive: true,
      createdAt: '2024-01-16',
      updatedAt: '2024-01-16'
    }
  ]);

  const filteredPrograms = programs.filter(program =>
    program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    program.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    program.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <BookOpen className="text-indigo-600" size={32} />
                Program List
              </h1>
              <p className="text-gray-600 mt-2">Course categories</p>
            </div>
            <button
              onClick={() => navigate('/admin/course/program/add')}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              <Plus size={20} />
              Add Program
            </button>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search programs..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <div key={program.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{program.name}</h3>
                    <p className="text-sm text-gray-500">Code: {program.code}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    program.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {program.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>Duration: {program.duration} months</span>
                  <span>Category: {program.category}</span>
                </div>
                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => navigate(`/admin/course/program/view/${program.id}`)}
                    className="flex-1 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => navigate(`/admin/course/program/edit/${program.id}`)}
                    className="flex-1 p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                  >
                    <Edit size={18} />
                  </button>
                  <button className="flex-1 p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramList;

