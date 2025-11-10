// Attendance Types
export interface Attendance {
  id: string;
  studentId?: string;
  staffId?: string;
  studentName?: string;
  staffName?: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'half-day' | 'leave';
  courseId?: string;
  courseName?: string;
  batchId?: string;
  batchCode?: string;
  remarks?: string;
  markedBy: string;
  createdAt: string;
}

export interface AttendanceDashboard {
  totalStudents: number;
  presentToday: number;
  absentToday: number;
  attendancePercentage: number;
  courseWiseAttendance: {
    courseName: string;
    present: number;
    absent: number;
    percentage: number;
  }[];
}



