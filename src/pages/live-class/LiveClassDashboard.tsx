import React, { useState, useEffect } from 'react';
import { Plus, Video, Calendar, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { LiveClass } from '../../types/LiveClass';

const LiveClassDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [upcomingClasses, setUpcomingClasses] = useState<LiveClass[]>([]);
  const [pastClasses, setPastClasses] = useState<LiveClass[]>([]);

  useEffect(() => {
    setUpcomingClasses([
      {
        id: '1',
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
        startTime: '2024-11-08T10:00:00',
        endTime: '2024-11-08T12:00:00',
        duration: 120,
        instructorId: '1',
        instructorName: 'Dr. John Smith',
        status: 'scheduled',
        createdAt: '2024-11-07',
        updatedAt: '2024-11-07'
      }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Video className="text-indigo-600" size={32} />
                Live Class Dashboard
              </h1>
              <p className="text-gray-600 mt-2">Upcoming & past classes</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/admin/live-class/youtube/add')}
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
              >
                <Plus size={20} />
                Add YouTube Class
              </button>
              <button
                onClick={() => navigate('/admin/live-class/zoom/add')}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
              >
                <Plus size={20} />
                Add Zoom/Meet Class
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Classes</h2>
              <div className="space-y-4">
                {upcomingClasses.map((classItem) => (
                  <div key={classItem.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{classItem.title}</h3>
                        <p className="text-sm text-gray-600">{classItem.batchCode} - {classItem.subjectName}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        classItem.status === 'scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {classItem.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{new Date(classItem.startTime).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{new Date(classItem.startTime).toLocaleTimeString()} - {new Date(classItem.endTime).toLocaleTimeString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>Instructor: {classItem.instructorName}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate(`/admin/live-class/join/${classItem.id}`)}
                      className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                    >
                      Join Class
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Past Classes</h2>
              <div className="space-y-4">
                {pastClasses.length === 0 ? (
                  <div className="text-center py-12 border border-gray-200 rounded-lg">
                    <Video className="mx-auto text-gray-400 mb-4" size={48} />
                    <p className="text-gray-600">No past classes</p>
                  </div>
                ) : (
                  pastClasses.map((classItem) => (
                    <div key={classItem.id} className="border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900">{classItem.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {new Date(classItem.startTime).toLocaleDateString()}
                      </p>
                      {classItem.recordingUrl && (
                        <button
                          onClick={() => window.open(classItem.recordingUrl, '_blank')}
                          className="mt-3 text-indigo-600 hover:text-indigo-700 font-medium"
                        >
                          View Recording
                        </button>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClassDashboard;



