export type AuthenticatedUser = {
  id: string;
  email: string;
  phone: string | null;
  fullName: string;
  role: string;
  isActive: boolean;
};
