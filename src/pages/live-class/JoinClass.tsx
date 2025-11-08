import React, { useState, useEffect } from 'react';
import { ArrowLeft, Video, Key, ExternalLink, Users, Clock } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { LiveClass } from '../../types/LiveClass';

const JoinClass: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [classItem, setClassItem] = useState<LiveClass | null>(null);
  const [password, setPassword] = useState('');

  useEffect(() => {
    setClassItem({
      id: id || '1',
      title: 'Data Structures - Arrays',
      description: 'Introduction to arrays and their operations',
      batchId: '1',
      batchCode: 'BCA-2024-01',
      courseId: '1',
      courseName: 'BCA',
      subjectId: '1',
      subjectName: 'Data Structures',
      classType: 'zoom',
      meetingLink: 'https://zoom.us/j/123456789',
      meetingId: '123456789',
      meetingPassword: 'ABC123',
      startTime: '2024-11-08T10:00:00',
      endTime: '2024-11-08T12:00:00',
      duration: 120,
      instructorId: '1',
      instructorName: 'Dr. John Smith',
      status: 'scheduled',
      createdAt: '2024-11-07',
      updatedAt: '2024-11-07'
    });
  }, [id]);

  if (!classItem) {
    return <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading class...</p>
      </div>
    </div>;
  }

  const handleJoin = () => {
    if (classItem.classType === 'youtube') {
      window.open(classItem.meetingLink, '_blank');
    } else {
      // For Zoom/Meet, open in new tab
      window.open(classItem.meetingLink, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/admin/live-class')}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Video className="text-indigo-600" size={32} />
                Join Class
              </h1>
              <p className="text-gray-600 mt-2">Student view</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-6 border border-indigo-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{classItem.title}</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Users className="text-gray-600" size={20} />
                <span className="text-gray-700">{classItem.batchCode} - {classItem.subjectName || classItem.courseName}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-gray-600" size={20} />
                <span className="text-gray-700">
                  {new Date(classItem.startTime).toLocaleString()} - {new Date(classItem.endTime).toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-gray-600" size={20} />
                <span className="text-gray-700">Instructor: {classItem.instructorName}</span>
              </div>
            </div>
          </div>

          {classItem.description && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700">{classItem.description}</p>
            </div>
          )}

          {classItem.classType !== 'youtube' && classItem.meetingPassword && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Password</label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter meeting password"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={handleJoin}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              <ExternalLink size={20} />
              Join {classItem.classType === 'youtube' ? 'YouTube' : classItem.classType === 'zoom' ? 'Zoom' : 'Meet'} Class
            </button>
          </div>

          {classItem.meetingLink && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Meeting Link:</p>
              <a
                href={classItem.meetingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 break-all"
              >
                {classItem.meetingLink}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinClass;



