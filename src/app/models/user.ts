export interface UserDetail {
  key: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  accountType: "Nhà tuyển dụng" | "Nguời ứng tuyển";
  status: "Đã xác thực" | "Chưa xác thực";
}
