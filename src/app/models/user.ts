import { Nation } from "./language";

export interface UserDetail {
  id: string;
  name: string;
  email: string;
  phone: string;
  dob: number;
  role: "freelancer" | "enterprise" | "admin";
  address: string;
  nation: Nation[string];
  isVerified: boolean;
  averageRating: number;
  ratingCount: number;
  projectCount: number;
  createdAt: number;
  desireSalary: number;
  language: string[];
  description: string;
}

export interface UserDetailTable extends UserDetail {
  key: string;
  dobString: string;
  status: string;
}
