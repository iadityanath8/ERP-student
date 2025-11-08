// Course Sales Types
export interface CourseSale {
  id: string;
  studentId: string;
  studentName: string;
  courseId: string;
  courseName: string;
  franchiseId?: string;
  franchiseName?: string;
  amount: number;
  discount?: number;
  finalAmount: number;
  saleDate: string;
  paymentStatus: 'pending' | 'paid' | 'partial';
  invoiceNumber: string;
  createdAt: string;
}

export interface SalesOverview {
  totalRevenue: number;
  totalSales: number;
  monthlyRevenue: number;
  courseWiseSales: {
    courseName: string;
    sales: number;
    revenue: number;
  }[];
  franchiseWiseSales: {
    franchiseName: string;
    sales: number;
    revenue: number;
  }[];
}



