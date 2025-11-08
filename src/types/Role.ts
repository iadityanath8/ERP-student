// Role & Permission Types
export interface Permission {
  id: string;
  name: string;
  module: string;
  action: string;
  description: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[]; // Permission IDs
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface RoleAccess {
  roleId: string;
  roleName: string;
  modules: {
    module: string;
    permissions: Permission[];
  }[];
}

