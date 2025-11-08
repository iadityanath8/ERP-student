// Online Exam Module Types
export interface Question {
  id: string;
  question: string;
  questionHindi?: string;
  questionImage?: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  optionsHindi?: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  marks: number;
  negativeMarks?: number;
  subjectId: string;
  subjectName: string;
  courseId: string;
  courseName: string;
  difficulty: 'easy' | 'medium' | 'hard';
  createdAt: string;
  updatedAt: string;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  courseId: string;
  courseName: string;
  batchId: string;
  batchCode: string;
  subjectId?: string;
  subjectName?: string;
  startDate: string;
  endDate: string;
  duration: number; // in minutes
  totalMarks: number;
  passingMarks: number;
  questions: string[]; // Question IDs
  status: 'draft' | 'scheduled' | 'ongoing' | 'completed' | 'cancelled';
  negativeMarking: boolean;
  showResult: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ExamAttempt {
  id: string;
  examId: string;
  examTitle: string;
  studentId: string;
  studentName: string;
  rollNumber: string;
  startTime: string;
  submitTime?: string;
  answers: Record<string, 'A' | 'B' | 'C' | 'D'>; // questionId -> answer
  score?: number;
  percentage?: number;
  status: 'in-progress' | 'submitted' | 'timeout';
  createdAt: string;
}

export interface AdmitCard {
  id: string;
  examId: string;
  examTitle: string;
  studentId: string;
  studentName: string;
  rollNumber: string;
  examDate: string;
  examTime: string;
  examVenue?: string;
  instructions: string[];
  generatedAt: string;
}

export interface ExamAnalytics {
  examId: string;
  examTitle: string;
  totalStudents: number;
  attemptedStudents: number;
  averageScore: number;
  passPercentage: number;
  topPerformers: {
    studentName: string;
    rollNumber: string;
    score: number;
    percentage: number;
  }[];
  questionWiseAnalysis: {
    questionId: string;
    correctAnswers: number;
    wrongAnswers: number;
    notAttempted: number;
  }[];
}



