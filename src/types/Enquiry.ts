// Student Enquiries Types
export interface Enquiry {
  id: string;
  studentName: string;
  email: string;
  phone: string;
  courseId: string;
  courseName: string;
  source: 'website' | 'walk-in' | 'referral' | 'phone' | 'other';
  status: 'new' | 'contacted' | 'follow-up' | 'converted' | 'lost';
  enquiryDate: string;
  notes: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FollowUp {
  id: string;
  enquiryId: string;
  followUpDate: string;
  notes: string;
  nextFollowUpDate?: string;
  status: 'pending' | 'completed';
  createdBy: string;
  createdAt: string;
}



