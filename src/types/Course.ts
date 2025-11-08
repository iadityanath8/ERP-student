// Course Management Types
export interface Program {
  id: string;
  name: string;
  code: string;
  description: string;
  duration: number; // in months
  category: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  id: string;
  programId: string;
  programName: string;
  name: string;
  code: string;
  description: string;
  fee: number;
  duration: number; // in months
  credits: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Subject {
  id: string;
  courseId: string;
  courseName: string;
  name: string;
  code: string;
  description: string;
  credits: number;
  hours: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Syllabus {
  id: string;
  courseId: string;
  courseName: string;
  subjectId?: string;
  subjectName?: string;
  title: string;
  description: string;
  fileUrl: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  uploadedBy: string;
  uploadedAt: string;
  isActive: boolean;
}

export interface Topic {
  id: string;
  subjectId: string;
  subjectName: string;
  courseId: string;
  courseName: string;
  title: string;
  description: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface StudyMaterial {
  id: string;
  topicId: string;
  topicName: string;
  subjectId: string;
  subjectName: string;
  title: string;
  description: string;
  fileUrl: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  materialType: 'pdf' | 'video' | 'document' | 'link' | 'other';
  uploadedBy: string;
  uploadedAt: string;
  isActive: boolean;
}

