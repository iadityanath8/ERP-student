import React, { useState } from 'react';
import { Video, Download, Play, Calendar, Clock } from 'lucide-react';
import type { LiveClass } from '../../types/LiveClass';

const ClassRecordings: React.FC = () => {
  const [recordings] = useState<LiveClass[]>([
    {
      id: '1',
      title: 'Data Structures - Arrays',
      description: 'Introduction to arrays',
      batchId: '1',
      batchCode: 'BCA-2024-01',
      courseId: '1',
      courseName: 'BCA',
      subjectId: '1',
      subjectName: 'Data Structures',
      classType: 'zoom',
      startTime: '2024-11-01T10:00:00',
      endTime: '2024-11-01T12:00:00',
      duration: 120,
      instructorId: '1',
      instructorName: 'Dr. John Smith',
      status: 'completed',
      recordingUrl: 'https://example.com/recording1.mp4',
      createdAt: '2024-11-01',
      updatedAt: '2024-11-01'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Video className="text-indigo-600" size={32} />
              Class Recordings
            </h1>
            <p className="text-gray-600 mt-2">Access archives</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recordings.map((recording) => (
              <div key={recording.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <Video className="text-indigo-600" size={32} />
                  <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                    Available
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{recording.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{recording.batchCode} - {recording.subjectName}</p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(recording.startTime).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{recording.duration} minutes</span>
                  </div>
                  <p className="text-sm">Instructor: {recording.instructorName}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => window.open(recording.recordingUrl, '_blank')}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                  >
                    <Play size={18} />
                    Watch
                  </button>
                  <button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = recording.recordingUrl || '';
                      link.download = `${recording.title}.mp4`;
                      link.click();
                    }}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                    title="Download"
                  >
                    <Download size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {recordings.length === 0 && (
            <div className="text-center py-12">
              <Video className="mx-auto text-gray-400" size={48} />
              <p className="mt-4 text-gray-600">No recordings available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassRecordings;



