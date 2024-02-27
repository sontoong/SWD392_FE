export interface UserDetail {
  id: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  accountType: "Nhà tuyển dụng" | "Nguời ứng tuyển";
  address: string;
  nation: string;
  isVerified: boolean;
  averageRating: number;
  ratingCount: number;
  projectCount: number;
  createdAt: string;
  desireSalary: number;
  language: string[];
  description: string;
}

export interface UserDetailTable extends UserDetail {
  key: string;
  status: string;
}
