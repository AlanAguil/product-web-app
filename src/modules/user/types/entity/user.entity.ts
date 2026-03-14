export interface User {
  id: string;
  fullName: string;
  email: string;
  role: 'admin' | 'customer';
  avatar: string;
  createdAt: string;
}

export interface UserResponseDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roleType: string;
  avatar?: string;
  createdAt: string;
}
