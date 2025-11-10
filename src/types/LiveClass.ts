// Online Live Class Types
export interface LiveClass {
  id: string;
  title: string;
  description: string;
  batchId: string;
  batchCode: string;
  courseId: string;
  courseName: string;
  subjectId?: string;
  subjectName?: string;
  classType: 'youtube' | 'zoom' | 'meet' | 'other';
  meetingLink?: string;
  meetingId?: string;
  meetingPassword?: string;
  startTime: string;
  endTime: string;
  duration: number; // in minutes
  instructorId: string;
  instructorName: string;
  status: 'scheduled' | 'ongoing' | 'completed' | 'cancelled';
  recordingUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ClassCalendar {
  date: string;
  classes: LiveClass[];
}



