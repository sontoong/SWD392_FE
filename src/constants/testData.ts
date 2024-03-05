import { Applicant } from "../app/models/applicant";
import { Comment } from "../app/models/comment";
import { CompanyDetail } from "../app/models/company";
import { EnterpriseInfo } from "../app/models/enterprise";
import { Income } from "../app/models/income";
import { Nation } from "../app/models/language";
import {
  SkillField,
  Project,
  Skill,
  OptionalRequirements,
  FreelancerProject,
  EnterpriseProject,
} from "../app/models/project";
import { Transaction } from "../app/models/transaction";
import { FreelancerDetail } from "../app/models/user";

export const nations: Nation = {
  vn: { label: "Việt Nam", value: "vn" },
  us: { label: "United States", value: "us" },
  cn: { label: "China", value: "cn" },
};

const skills: Skill[] = [
  { label: "Front-end Developer", value: "Front-end Developer" },
  { label: "Back-end Developer", value: "Back-end Developer" },
  { label: "Full-stack Developer", value: "Full-stack Developer" },
  { label: "Mobile Developer", value: "Mobile Developer" },
  { label: "UI/UX Designer", value: "UI/UX Designer" },
  { label: "Data Scientist", value: "Data Scientist" },
  { label: "Data Engineer", value: "Data Engineer" },
];

const field: SkillField = {
  label: "name",
  value: "name",
  skills: skills,
};

const field1: SkillField = {
  label: "name",
  value: "name",
  skills: skills,
};

const optionalRequirements: OptionalRequirements = {
  minimumCompletedProjects: "Tất cả",
  language: "Tất cả",
  location: "Tất cả",
  rating: "Tất cả",
  skills: skills,
};

export const project: Project = {
  id: "1",
  title: "Lập trình Front-end",
  createdBy: "Nguyễn Văn A",
  createdById: "1",
  description: "Viết app ứng dụng android",
  isVerified: true,
  paidAmount: 0,
  projectField: field,
  publishedTime: 1708532861,
  isCompleted: false,
  language: "English",
  location: "Tất cả",
  timeToComplete: 1,
  freelancerRequirement: "junior",
  optionalRequirements: optionalRequirements,
  funding: "hourly",
  initialFunding: 0,
  projectType: "longterm",
  privacy: "public",
  applicationCount: 5,
  inviteSent: 6,
  inviteAccepted: 3,
  freelancerCount: 10,
};

export const freelancer: FreelancerDetail = {
  id: "1",
  role: "freelancer",
  dob: 1708532861,
  email: "nguyena@gmail.com",
  username: "Nguyễn Văn A",
  phone: "0123456789",
  address:
    "Đường D1, Đ. D1, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh 715650",
  nation: nations["vn"],
  isVerified: true,
  averageRating: 3.5,
  ratingCount: 10,
  createdAt: 1708532861,
  description: `20 năm trong Full-Stack Development + UI/UX
Facebook: fb.com/user/JoeBiden`,
  desireSalary: 50000,
  language: ["English", "Vietnamese"],
  projectCount: 5,
  experienceLevel: "junior",
  firstName: "Nguyễn",
  middleName: "Văn",
  lastName: "A",
  jobRole: "Front-end Developer",
  profilePicture: "",
};

export const projects: Project[] = [project];

const comment: Comment = {
  title: "Nguyen Van A",
  avatar: "",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a erat ut nibh dignissim bibendum id eu est. Nunc libero nisl, vestibulum id sodales sit amet, condimentum ut velit. Curabitur scelerisque laoreet maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus, diam nec accumsan suscipit, quam mi dictum felis, vestibulum dictum lectus ex sit amet nibh. Maecenas ultrices elit eget cursus auctor. Donec venenatis nisl odio, quis ...",
  rating: 4.5,
};

const comment2: Comment = {
  title: "Nguyen Van A",
  avatar: "",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a erat ut nibh dignissim bibendum id eu est. Nunc libero nisl, vestibulum id sodales sit amet, condimentum ut velit. Curabitur scelerisque laoreet maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus, diam nec accumsan suscipit, quam mi dictum felis, vestibulum dictum lectus ex sit amet nibh. Maecenas ultrices elit eget cursus auctor. Donec venenatis nisl odio, quis ...",
  rating: 4.5,
};

export const comments: Comment[] = [comment, comment2];

export const companyDetail: CompanyDetail = {
  enterpriseCountry: { label: "Việt Nam", value: "vn" },
  companyName: "FPT Software",
  website: "http://domainexpansion.com",
  videoLink: "https://youtu.be/dQw4w9WgXcQ?si=kCbyzyW8_XaVT8-j",
  companySize: "10-20",
  introduction:
    "This is the place for cooking, like Gordon's grilled cheese sandwich.",
  industryFields: [field1, field],
  companyDocument: "FunnyMemeFrom9GAG.png",
  registrationDocumentType: "Giấy phép ĐKKD",
  identificationNumber: 333333333333333,
  companyCountry: "Việt Nam",
  taxNumber: 33333333333333,
  address: "Đường D1, Đ. D1, Phường Tân Phú, Quận 9, Hồ Chí Minh, Việt Nam",
  companyEmail: "CoolMathGame@gmail.com",
  companyPhone: "33333333333333",
};

export const enterpriseInfo: EnterpriseInfo = {
  firstName: "Nguyễn",
  middleName: "Văn",
  lastName: "A",
  dateOfBirth: 1708532861,
  enterpriseCountry: "Việt Nam",
  documentType: "Hộ chiếu",
  enterpriseDocument: "FunnyMemeFrom9GAG.png",
  documentNumber: 33333333333333,
  enterpriseEmail: "CoolMathGame@gmail.com",
  enterprisePhone: "33333333333333",
};

export const FreelancerProjects: FreelancerProject[] = [
  {
    ...project,
    startDate: 1708532861,
    endDate: 1708532861,
    status: "stopped",
    signature: "Thuan",
  },
  {
    ...project,
    startDate: 1708532861,
    endDate: 1708532861,
    status: "doing",
    signature: "Thuan",

  },
  {
    ...project,
    startDate: 1708532861,
    endDate: 1708532861,
    status: "contracting",
    signature: "",
  },
  {
    ...project,
    startDate: 1708532861,
    endDate: 1708532861,
    status: "verifying",
    signature: "",
  },
  {
    ...project,
    startDate: 1708532861,
    endDate: 1708532861,
    status: "denied",
    signature: "",
  },
];

export const EnterpriseProjects: EnterpriseProject[] = [
  { ...project, applicationCount: 5, freelancerCount: 10, status: "hiring" },
  { ...project, applicationCount: 5, freelancerCount: 10, status: "closed" },
  { ...project, applicationCount: 5, freelancerCount: 10, status: "doing" },
];


export const Incomes: Income[] = [
  {
    customer: "Nguyễn Văn Cường",
    customerId: "",
    projectId: "",
    incomeAmount: 5000000,
    serviceFee: 15000000,
  },
  {
    customer: "Nguyễn Văn Cường",
    customerId: "",
    projectId: "",
    incomeAmount: 5000000,
    serviceFee: 15000000,
  },
  {
    customer: "Nguyễn Văn Cường",
    customerId: "",
    projectId: "",
    incomeAmount: 5000000,
    serviceFee: 15000000,
  },
  {
    customer: "Nguyễn Văn Cường",
    customerId: "",
    projectId: "",
    incomeAmount: 5000000,
    serviceFee: 15000000,
  },
];

export const Transactions: Transaction[] = [
  {
    name: "Nguyễn Văn Cường",
    date: 1708532861,
    id: "#15XE335NME",
    moneyAmount: 5000000,
    type: "cash-out",
  },
  {
    name: "Nguyễn Văn Cường",
    date: 1708532861,
    id: "#15XE335NME",
    moneyAmount: 5000000,
    type: "transaction",
  },
];

export const Applicants: Applicant[] = [
  {
    id: "",
    name: "Nguyễn Văn A",
    date: 1708532861,
    file: "",
    question: [
      {
        question: "Câu 1",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut condimentum turpis. Aenean accumsan vel turpis id dictum. Maecenas lobortis, ante quis volutpat dignissim, mi magna viverra enim, quis lacinia arcu metus nec leo. Sed accumsan sed eros non rhoncus. Integer sagittis diam eget justo commodo dapibus. Ut at maximus sem, vitae laoreet leo.",
      },
      {
        question: "Câu 2",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut condimentum turpis. Aenean accumsan vel turpis id dictum. Maecenas lobortis, ante quis volutpat dignissim, mi magna viverra enim, quis lacinia arcu metus nec leo. Sed accumsan sed eros non rhoncus. Integer sagittis diam eget justo commodo dapibus. Ut at maximus sem, vitae laoreet leo.",
      },
      {
        question: "Câu 3",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut condimentum turpis. Aenean accumsan vel turpis id dictum. Maecenas lobortis, ante quis volutpat dignissim, mi magna viverra enim, quis lacinia arcu metus nec leo. Sed accumsan sed eros non rhoncus. Integer sagittis diam eget justo commodo dapibus. Ut at maximus sem, vitae laoreet leo.",
      },
    ],
  },
  {
    id: "",
    name: "Nguyễn Văn A",
    date: 1708532861,
    file: "",
    question: [
      {
        question: "Câu 1",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut condimentum turpis. Aenean accumsan vel turpis id dictum. Maecenas lobortis, ante quis volutpat dignissim, mi magna viverra enim, quis lacinia arcu metus nec leo. Sed accumsan sed eros non rhoncus. Integer sagittis diam eget justo commodo dapibus. Ut at maximus sem, vitae laoreet leo.",
      },
      {
        question: "Câu 2",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut condimentum turpis. Aenean accumsan vel turpis id dictum. Maecenas lobortis, ante quis volutpat dignissim, mi magna viverra enim, quis lacinia arcu metus nec leo. Sed accumsan sed eros non rhoncus. Integer sagittis diam eget justo commodo dapibus. Ut at maximus sem, vitae laoreet leo.",
      },
      {
        question: "Câu 3",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut condimentum turpis. Aenean accumsan vel turpis id dictum. Maecenas lobortis, ante quis volutpat dignissim, mi magna viverra enim, quis lacinia arcu metus nec leo. Sed accumsan sed eros non rhoncus. Integer sagittis diam eget justo commodo dapibus. Ut at maximus sem, vitae laoreet leo.",
      },
    ],
  },
];
