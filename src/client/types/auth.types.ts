export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  profileImage?: string;
  spacesAdded?: number;
  spacesAccessed?: number;
  recentActivity?: number;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface AuthState {
  userInfo: User | null;
  token: string | null;
}