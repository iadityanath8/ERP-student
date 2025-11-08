// Notifications Types
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'email' | 'sms' | 'whatsapp' | 'push';
  targetType: 'all' | 'student' | 'staff' | 'franchise' | 'batch' | 'course' | 'custom';
  targetIds: string[]; // Student IDs, Batch IDs, etc.
  status: 'draft' | 'scheduled' | 'sent' | 'failed';
  scheduledAt?: string;
  sentAt?: string;
  templateId?: string;
  createdBy: string;
  createdAt: string;
}

export interface NotificationTemplate {
  id: string;
  name: string;
  type: 'email' | 'sms' | 'whatsapp';
  subject?: string;
  body: string;
  variables: string[]; // e.g., ['{studentName}', '{courseName}']
  createdAt: string;
}



