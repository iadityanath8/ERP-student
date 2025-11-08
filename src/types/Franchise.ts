// Franchise Management Types
export interface Franchise {
  id: string;
  name: string;
  code: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  status: 'active' | 'suspended' | 'pending' | 'inactive';
  registrationDate: string;
  documents: {
    photo?: string;
    idProof?: string;
    signature?: string;
  };
  totalStudents?: number;
  totalStaff?: number;
  walletBalance?: number;
}

export interface FranchiseUser {
  id: string;
  franchiseId: string;
  name: string;
  email: string;
  phone: string;
  role: 'manager' | 'staff' | 'admin';
  isActive: boolean;
  createdAt: string;
}

export interface FranchiseDashboard {
  franchiseId: string;
  franchiseName: string;
  stats: {
    totalStudents: number;
    totalStaff: number;
    activeCourses: number;
    monthlyRevenue: number;
    walletBalance: number;
  };
  recentActivity: string[];
}

