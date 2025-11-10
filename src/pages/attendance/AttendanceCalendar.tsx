import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, CheckCircle2, XCircle } from 'lucide-react';

const AttendanceCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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

  const getAttendanceStatus = (date: Date | null) => {
    if (!date) return null;
    // Mock data - in real app, fetch from API
    const day = date.getDate();
    if (day % 3 === 0) return 'present';
    if (day % 3 === 1) return 'absent';
    return 'late';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Calendar className="text-indigo-600" size={32} />
                Attendance Calendar
              </h1>
              <p className="text-gray-600 mt-2">Monthly view</p>
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
            {days.map((date, index) => {
              const status = getAttendanceStatus(date);
              return (
                <div
                  key={index}
                  onClick={() => date && setSelectedDate(date)}
                  className={`min-h-20 p-2 border-2 rounded-lg cursor-pointer transition ${
                    date && date.toDateString() === selectedDate?.toDateString()
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                  } ${!date ? 'bg-gray-50' : ''}`}
                >
                  {date && (
                    <>
                      <div className="font-semibold text-gray-900 mb-1">{date.getDate()}</div>
                      {status && (
                        <div className="flex justify-center">
                          {status === 'present' ? (
                            <CheckCircle2 size={16} className="text-green-600" />
                          ) : status === 'absent' ? (
                            <XCircle size={16} className="text-red-600" />
                          ) : (
                            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 justify-center">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-green-600" />
              <span className="text-sm text-gray-600">Present</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle size={20} className="text-red-600" />
              <span className="text-sm text-gray-600">Absent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Late</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCalendar;



