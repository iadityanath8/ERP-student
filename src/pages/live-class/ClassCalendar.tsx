import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Clock, Video } from 'lucide-react';
import type { ClassCalendar, LiveClass } from '../../types/LiveClass';

const ClassCalendarPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [calendarData] = useState<ClassCalendar[]>([
    {
      date: '2024-11-08',
      classes: [
        {
          id: '1',
          title: 'Data Structures',
          description: 'Arrays and Linked Lists',
          batchId: '1',
          batchCode: 'BCA-2024-01',
          courseId: '1',
          courseName: 'BCA',
          classType: 'zoom',
          startTime: '2024-11-08T10:00:00',
          endTime: '2024-11-08T12:00:00',
          duration: 120,
          instructorId: '1',
          instructorName: 'Dr. John Smith',
          status: 'scheduled',
          createdAt: '2024-11-07',
          updatedAt: '2024-11-07'
        }
      ]
    }
  ]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getClassesForDate = (date: Date | null) => {
    if (!date) return [];
    const dateStr = date.toISOString().split('T')[0];
    return calendarData.find(cal => cal.date === dateStr)?.classes || [];
  };

  const selectedClasses = getClassesForDate(selectedDate);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Calendar className="text-indigo-600" size={32} />
                Class Calendar
              </h1>
              <p className="text-gray-600 mt-2">Weekly schedule</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
              <h2 className="text-xl font-bold text-gray-900">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ChevronRight size={24} className="text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-6">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center font-semibold text-gray-700 py-2">
                {day}
              </div>
            ))}
            {days.map((date, index) => (
              <div
                key={index}
                onClick={() => date && setSelectedDate(date)}
                className={`min-h-24 p-2 border border-gray-200 rounded-lg cursor-pointer transition ${
                  date && date.toDateString() === selectedDate.toDateString()
                    ? 'bg-indigo-100 border-indigo-500'
                    : 'hover:bg-gray-50'
                } ${!date ? 'bg-gray-50' : ''}`}
              >
                {date && (
                  <>
                    <div className="font-semibold text-gray-900 mb-1">{date.getDate()}</div>
                    {getClassesForDate(date).length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {getClassesForDate(date).slice(0, 2).map((cls) => (
                          <div key={cls.id} className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        ))}
                        {getClassesForDate(date).length > 2 && (
                          <span className="text-xs text-gray-600">+{getClassesForDate(date).length - 2}</span>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {selectedClasses.length > 0 && (
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Classes on {selectedDate.toLocaleDateString()}
              </h3>
              <div className="space-y-4">
                {selectedClasses.map((classItem) => (
                  <div key={classItem.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{classItem.title}</h4>
                        <p className="text-sm text-gray-600">{classItem.batchCode} - {classItem.subjectName || classItem.courseName}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="text-indigo-600" size={20} />
                        <span className="text-sm text-gray-600 capitalize">{classItem.classType}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>
                          {new Date(classItem.startTime).toLocaleTimeString()} - {new Date(classItem.endTime).toLocaleTimeString()}
                        </span>
                      </div>
                      <span>Instructor: {classItem.instructorName}</span>
                    </div>
                    {classItem.meetingLink && (
                      <button
                        onClick={() => window.open(classItem.meetingLink, '_blank')}
                        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                      >
                        Join Class
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCalendarPage;

