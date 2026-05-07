export interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  street?: string;
  number?: string;
  colony?: string;
  cp?: string;
  role: 'admin' | 'customer';
  avatar: string;
  createdAt: string;
}

export interface UserResponseDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  street?: string;
  number?: string;
  colony?: string;
  cp?: string;
  roleType: string;
  avatar?: string;
  createdAt: string;
}
