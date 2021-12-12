export interface User {
  id: string;
  email: string;
  password: string;
  twoFactorAuth: boolean;
  secret?: string;
  uri?: string;
  qr?: string;
}
