
export type UserRole = 'admin' | 'franchise' | 'student' | 'instructor';


export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatar?: string;
    phone?: string;
    location?: string;
  }