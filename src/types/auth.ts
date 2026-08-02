export interface User {
  id: string;
  name: string;
  email: string;
  role: "TENANT" | "LANDLORD" | "ADMIN";
  isActive: boolean;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: User;
}
