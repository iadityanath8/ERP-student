// Certificate & Marksheet Types
export interface Certificate {
  id: string;
  studentId: string;
  studentName: string;
  rollNumber: string;
  courseId: string;
  courseName: string;
  certificateType: 'completion' | 'merit' | 'participation' | 'other';
  issueDate: string;
  certificateNumber: string;
  templateId: string;
  fileUrl: string;
  createdAt: string;
}

export interface Marksheet {
  id: string;
  studentId: string;
  studentName: string;
  rollNumber: string;
  courseId: string;
  courseName: string;
  batchId: string;
  batchCode: string;
  semester?: string;
  subjects: {
    subjectId: string;
    subjectName: string;
    marksObtained: number;
    maxMarks: number;
    grade: string;
  }[];
  totalMarks: number;
  maxTotalMarks: number;
  percentage: number;
  cgpa?: number;
  result: 'pass' | 'fail';
  issueDate: string;
  fileUrl: string;
  createdAt: string;
}



