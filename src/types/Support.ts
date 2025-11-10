// Support Center Types
export interface SupportTicket {
  id: string;
  ticketNumber: string;
  title: string;
  description: string;
  category: 'technical' | 'billing' | 'academic' | 'general' | 'other';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  createdBy: string;
  createdByName: string;
  assignedTo?: string;
  assignedToName?: string;
  studentId?: string;
  studentName?: string;
  attachments?: string[];
  replies: TicketReply[];
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
}

export interface TicketReply {
  id: string;
  ticketId: string;
  message: string;
  repliedBy: string;
  repliedByName: string;
  isInternal: boolean; // Internal notes vs public replies
  attachments?: string[];
  createdAt: string;
}

export interface SupportCategory {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
}

export interface SupportStats {
  totalTickets: number;
  openTickets: number;
  inProgressTickets: number;
  resolvedTickets: number;
  closedTickets: number;
  averageResolutionTime: number; // in hours
}

