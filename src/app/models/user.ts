export interface UserDetail {
  id: string;
  email: string;
  name: string;
  avatar: string | null;
  trainee_code: string;
  password: string;
  phoneNumber: string;
  national: string | null;
  dob: string | null;
  gender: string;
  address: string | null;
  class: {
    admin: {
      name: string;
    };
    mentor: {
      name: string;
    };
    name: string;
    status: boolean;
    isOpen: boolean;
    id: string;
  };
}
