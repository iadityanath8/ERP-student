// Student Panel Types
export interface StudentDashboard {
  enrolledCourses: number;
  upcomingClasses: number;
  pendingExams: number;
  pendingFees: number;
  recentAnnouncements: any[];
  upcomingEvents: any[];
  attendancePercentage: number;
  recentActivity: StudentActivity[];
}

export interface StudentActivity {
  id: string;
  type: 'class' | 'exam' | 'assignment' | 'announcement' | 'payment';
  title: string;
  description: string;
  date: string;
  status?: string;
}

export interface StudentEnrollment {
  id: string;
  courseId: string;
  courseName: string;
  batchId: string;
  batchCode: string;
  enrollmentDate: string;
  status: 'active' | 'completed' | 'suspended';
  progress: number; // percentage
  startDate: string;
  endDate?: string;
}

export interface StudentClass {
  id: string;
  title: string;
  subject: string;
  instructor: string;
  startTime: string;
  endTime: string;
  platform: 'zoom' | 'youtube' | 'google-meet' | 'other';
  meetingLink?: string;
  recordingUrl?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface StudentExam {
  id: string;
  title: string;
  subject: string;
  examDate: string;
  startTime: string;
  endTime: string;
  duration: number; // in minutes
  totalMarks: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'missed';
  obtainedMarks?: number;
  percentage?: number;
  grade?: string;
}

export interface StudentFee {
  id: string;
  feeSlipId: string;
  title: string;
  amount: number;
  dueDate: string;
  status: 'pending' | 'paid' | 'overdue';
  paidAmount?: number;
  paidDate?: string;
  paymentMethod?: string;
}

export interface StudentCertificate {
  id: string;
  courseName: string;
  certificateType: string;
  issueDate: string;
  certificateNumber: string;
  fileUrl: string;
}

export interface StudentMaterial {
  id: string;
  title: string;
  subject: string;
  topic: string;
  type: 'pdf' | 'video' | 'document' | 'link';
  fileUrl: string;
  uploadedAt: string;
}

