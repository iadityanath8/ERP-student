import React, { useState } from 'react';
import { ArrowLeft, Download, Search, FileText, Hash } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { AdmitCard } from '../../types/Exam';

const AdmitCardGenerator: React.FC = () => {
  const navigate = useNavigate();
  const { examId } = useParams<{ examId: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [admitCards, setAdmitCards] = useState<AdmitCard[]>([]);

  const [students] = useState([
    { id: '1', name: 'Rajesh Kumar', rollNumber: 'BCA2024001' },
    { id: '2', name: 'Priya Sharma', rollNumber: 'BCA2024002' }
  ]);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGenerate = () => {
    const cards = selectedStudents.map(studentId => {
      const student = students.find(s => s.id === studentId);
      return {
        id: `card-${studentId}`,
        examId: examId || '1',
        examTitle: 'BCA Semester 1 - Data Structures',
        studentId: studentId,
        studentName: student?.name || '',
        rollNumber: student?.rollNumber || '',
        examDate: '2024-11-15',
        examTime: '10:00 AM - 12:00 PM',
        examVenue: 'Main Hall',
        instructions: [
          'Report 30 minutes before exam time',
          'Bring valid ID card',
          'No electronic devices allowed',
          'Follow all exam rules'
        ],
        generatedAt: new Date().toISOString()
      };
    });
    setAdmitCards(cards);
  };

  const toggleStudent = (studentId: string) => {
    setSelectedStudents(prev =>
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate(`/admin/exam/view/${examId}`)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <FileText className="text-indigo-600" size={32} />
                Admit Card Generator
              </h1>
              <p className="text-gray-600 mt-2">Auto-create for students</p>
            </div>
          </div>

          {admitCards.length === 0 ? (
            <>
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name or roll number..."
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 max-h-96 overflow-y-auto mb-6">
                {filteredStudents.map((student) => (
                  <label
                    key={student.id}
                    className={`flex items-center justify-between p-4 border-2 rounded-lg mb-2 cursor-pointer transition ${
                      selectedStudents.includes(student.id)
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-gray-900">{student.name}</p>
                      <p className="text-sm text-gray-600">Roll: {student.rollNumber}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(student.id)}
                      onChange={() => toggleStudent(student.id)}
                      className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                  </label>
                ))}
              </div>

              <button
                onClick={handleGenerate}
                disabled={selectedStudents.length === 0}
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Generate Admit Cards ({selectedStudents.length})
              </button>
            </>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Generated Admit Cards</h2>
                <button
                  onClick={() => {
                    // Download all as PDF
                    alert('Downloading all admit cards...');
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  <Download size={20} />
                  Download All
                </button>
              </div>

              {admitCards.map((card) => (
                <div key={card.id} className="border-2 border-gray-300 rounded-lg p-8 bg-white">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Admit Card</h2>
                    <p className="text-gray-600">{card.examTitle}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Student Name</p>
                      <p className="font-bold text-gray-900">{card.studentName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Roll Number</p>
                      <p className="font-bold text-gray-900">{card.rollNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Exam Date</p>
                      <p className="font-bold text-gray-900">{new Date(card.examDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Exam Time</p>
                      <p className="font-bold text-gray-900">{card.examTime}</p>
                    </div>
                    {card.examVenue && (
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Venue</p>
                        <p className="font-bold text-gray-900">{card.examVenue}</p>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Instructions</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      {card.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      // Download individual card
                      alert(`Downloading admit card for ${card.studentName}...`);
                    }}
                    className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                  >
                    <Download size={20} />
                    Download Admit Card
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdmitCardGenerator;



