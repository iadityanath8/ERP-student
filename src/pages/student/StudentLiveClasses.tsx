import React, { useState } from 'react';
import { Video, Calendar, Clock, ExternalLink, Play, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { StudentClass } from '../../types/StudentPanel';

const StudentLiveClasses: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'ongoing' | 'completed'>('all');

  // Mock data
  const [classes] = useState<StudentClass[]>([
    {
      id: '1',
      title: 'Mathematics - Algebra',
      subject: 'Mathematics',
      instructor: 'Dr. Smith',
      startTime: '2024-01-16T10:00:00Z',
      endTime: '2024-01-16T11:30:00Z',
      platform: 'zoom',
      meetingLink: 'https://zoom.us/j/123456789',
      status: 'upcoming',
    },
    {
      id: '2',
      title: 'Physics - Mechanics',
      subject: 'Physics',
      instructor: 'Prof. Johnson',
      startTime: '2024-01-15T14:00:00Z',
      endTime: '2024-01-15T15:30:00Z',
      platform: 'youtube',
      meetingLink: 'https://youtube.com/watch?v=abc123',
      recordingUrl: 'https://youtube.com/watch?v=abc123',
      status: 'completed',
    },
    {
      id: '3',
      title: 'Chemistry - Organic',
      subject: 'Chemistry',
      instructor: 'Dr. Williams',
      startTime: '2024-01-15T16:00:00Z',
      endTime: '2024-01-15T17:00:00Z',
      platform: 'zoom',
      meetingLink: 'https://zoom.us/j/987654321',
      status: 'ongoing',
    },
  ]);

  const filteredClasses = filter === 'all'
    ? classes
    : classes.filter(c => c.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'youtube': return <Youtube className="w-5 h-5 text-red-500" />;
      case 'zoom': return <Video className="w-5 h-5 text-blue-500" />;
      default: return <Video className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Live Classes</h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex gap-2">
          {(['all', 'upcoming', 'ongoing', 'completed'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg capitalize ${
                filter === f
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Classes List */}
      <div className="space-y-4">
        {filteredClasses.map((classItem) => (
          <div key={classItem.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {getPlatformIcon(classItem.platform)}
                  <h3 className="text-lg font-semibold text-gray-800">{classItem.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-1">Subject: {classItem.subject}</p>
                <p className="text-sm text-gray-600">Instructor: {classItem.instructor}</p>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(classItem.status)}`}>
                {classItem.status}
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(classItem.startTime).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>
                  {new Date(classItem.startTime).toLocaleTimeString()} - {new Date(classItem.endTime).toLocaleTimeString()}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              {classItem.status === 'upcoming' || classItem.status === 'ongoing' ? (
                <a
                  href={classItem.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Play className="w-4 h-4" />
                  Join Class
                </a>
              ) : null}
              {classItem.recordingUrl && (
                <a
                  href={classItem.recordingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Play className="w-4 h-4" />
                  Watch Recording
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentLiveClasses;

