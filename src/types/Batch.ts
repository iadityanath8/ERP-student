// Batch Management Types
export interface Batch {
  id: string;
  code: string;
  name: string;
  courseId: string;
  courseName: string;
  startDate: string;
  endDate: string;
  timing: string; // e.g., "10:00 AM - 12:00 PM"
  duration: number; // in months
  maxStudents: number;
  currentStudents: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  instructorId?: string;
  instructorName?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BatchStudent {
  id: string;
  batchId: string;
  batchCode: string;
  studentId: string;
  studentName: string;
  studentRollNumber: string;
  enrolledDate: string;
  status: 'active' | 'completed' | 'dropped';
}



