// Student Admission Types
export interface Admission {
  id: string;
  studentId: string;
  rollNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  courseId: string;
  courseName: string;
  batchId: string;
  batchCode: string;
  admissionDate: string;
  status: 'pending' | 'approved' | 'rejected';
  username?: string;
  password?: string;
  documents: {
    photo?: string;
    idProof?: string;
    signature?: string;
    marksheet?: string;
    other?: string[];
  };
  address: string;
  city: string;
  state: string;
  pincode: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  parentName?: string;
  parentPhone?: string;
  createdAt: string;
  updatedAt: string;
}



