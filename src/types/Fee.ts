// Fee Management Types
export interface FeeSlip {
  id: string;
  studentId: string;
  studentName: string;
  rollNumber: string;
  courseId: string;
  courseName: string;
  batchId: string;
  batchCode: string;
  feeType: 'admission' | 'monthly' | 'exam' | 'other';
  amount: number;
  dueDate: string;
  paidDate?: string;
  status: 'pending' | 'paid' | 'partial' | 'overdue';
  paymentMethod?: 'cash' | 'online' | 'cheque' | 'bank_transfer';
  transactionId?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FeeDashboard {
  totalRevenue: number;
  pendingDues: number;
  monthlyRevenue: number;
  courseWiseRevenue: { courseName: string; amount: number }[];
  monthlyBreakdown: { month: string; amount: number }[];
}

export interface FeeReminder {
  id: string;
  studentId: string;
  feeSlipId: string;
  reminderType: 'email' | 'sms' | 'whatsapp';
  sentAt: string;
  status: 'sent' | 'failed';
}



