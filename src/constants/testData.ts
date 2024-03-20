import { Applicant } from "../app/models/applicant";
import { Comment } from "../app/models/rating";
import { CompanyDetail } from "../app/models/company";
import { EnterpriseInfo } from "../app/models/enterprise";
import { Income } from "../app/models/income";
import { Nation } from "../app/models/language";
import {
  Project,
  Skill,
  OptionalRequirements,
  CandidateProject,
  EnterpriseProject,
  OutsideProject,
  Field,
  SkillField,
  Contract,
} from "../app/models/project";
import { Transaction } from "../app/models/transaction";
import { Education, Experience, CandidateDetail } from "../app/models/user";

export const nations: Nation = {
  all: { label: "Tất cả", value: "all" },
  vn: { label: "Việt Nam", value: "vn" },
  us: { label: "Hoa Kì", value: "us" },
  cn: { label: "Trung Quốc", value: "cn" },
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

export const fields: Field[] = [
  { label: "IT", value: "it" },
  { label: "Nấu ăn", value: "cook" },
];

const field: SkillField = {
  label: "IT",
  value: "it",
};

const field1: SkillField = {
  label: "Nấu ăn",
  value: "cook",
};

const optionalRequirements: OptionalRequirements = {
  minimumCompletedProjects: "all",
  language: "all",
  nation: "all",
  rating: "all",
  skills: skills,
  questions: [
    "Bạn có thể cung cấp ví dụ về các dự án tương tự mà bạn đã hoàn thành trong quá khứ, và kết quả như thế nào không?",
    "Bạn tiếp cận thế nào với việc giao tiếp và hợp tác trong suốt vòng đời của dự án?",
    "Quy trình của bạn để xử lý sửa đổi hoặc phản hồi từ khách hàng như thế nào, và làm thế nào để đảm bảo sự hài lòng của khách hàng?",
  ],
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
  publishedTime: 1708532861000,
  isCompleted: false,
  language: "en",
  timeToComplete: "<1 month",
  candidateRequirement: "junior",
  optionalRequirements: optionalRequirements,
  funding: "hourly",
  initialFunding: 0,
  projectType: "longterm",
  privacy: "public",
  applicationCount: 5,
  inviteSent: 6,
  inviteAccepted: 3,
  candidateCount: 10,
};

export const oproject1: OutsideProject = {
  title: "FPT Fap",
  description: "Tôi tạo và quản lý database và flow cho project",
  jobRole: "Back-end Developer",
  startEndDate: [1708532861000, 1708532861000],
  images: [],
  projectDocumentImages: [{ image: { name: "img1" }, description: "" }],
};

export const education1: Education = {
  school: "FPT University",
  degree: "Bachelor",
  startEndYear: [1704042000000, 1704042000000],
  description: "Khóa học Full-Stack Development",
};

export const experience1: Experience = {
  company: "FPT",
  jobRole: "Back-end Developer",
  nation: "vn",
  startEndYear: [1704042000000, 1704042000000],
  description: "Khóa học Full-Stack Development",
};

export const candidate: CandidateDetail = {
  id: "1",
  role: "candidate",
  dob: 1708532861000,
  email: "nguyena@gmail.com",
  username: "Nguyễn Văn An",
  phone: "0123456789",
  address:
    "Đường D1, Đ. D1, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh 715650",
  nation: "vn",
  isVerified: true,
  averageRating: 3.5,
  ratingCount: 10,
  createdAt: 1708532861000,
  description: `20 năm trong Full-Stack Development + UI/UX
Facebook: fb.com/user/JoeBiden`,
  desireSalary: 50000,
  languages: ["vn", "en"],
  projectCount: 5,
  experienceLevel: "junior",
  firstName: "Nguyễn",
  middleName: "Văn",
  lastName: "A",
  jobRole: "Front-end Developer",
  profilePicture: "",
  skills: skills,
  outsideProjects: [oproject1],
  educations: [education1],
  experiences: [experience1],
  rating: [
    {
      name: "quality",
      rating: 0,
      ratingCount: 0,
    },
    {
      name: "price",
      rating: 0,
      ratingCount: 0,
    },
    {
      name: "time",
      rating: 0,
      ratingCount: 0,
    },
    {
      name: "response",
      rating: 0,
      ratingCount: 0,
    },
    {
      name: "talking",
      rating: 0,
      ratingCount: 0,
    },
  ],
  jobField: { label: "IT", value: "it" },
};

export const projectsTest: Project[] = [project];
export const candidates: CandidateDetail[] = [candidate];

const comment: Comment = {
  title: "Nguyen Vu",
  avatar: "",
  description:
    "Sự chú ý đến chi tiết trong dự án này thật sự đáng kinh ngạc. Mọi khía cạnh của công việc của bạn phản ánh một cấp độ chuyên nghiệp cao.",
  rating: 5,
};

const comment2: Comment = {
  title: "Vo Minh Khoai",
  avatar: "",
  description:
    "Tôi ấn tượng với sự sáng tạo và các giải pháp đổi mới mà bạn mang lại cho công việc này. Quan điểm độc đáo của bạn thực sự tỏa sáng trong sản phẩm cuối cùng.",
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
  identificationNumber: 1015452789,
  companyCountry: "Việt Nam",
  taxNumber: 10301458121,
  address: "Đường D1, Đ. D1, Phường Tân Phú, Quận 9, Hồ Chí Minh, Việt Nam",
  companyEmail: "CoolMathGame@gmail.com",
  companyPhone: "09105452789",
};

export const enterpriseInfo: EnterpriseInfo = {
  id: "1",
  firstName: "Nguyễn",
  middleName: "Văn",
  lastName: "A",
  dateOfBirth: 1708532861000,
  enterpriseCountry: { label: "Việt Nam", value: "vn" },
  documentType: "Hộ chiếu",
  enterpriseDocument: "FunnyMemeFrom9GAG.png",
  documentNumber: 10301458121,
  enterpriseEmail: "CoolMathGame@gmail.com",
  enterprisePhone: "09105452789",
  companyDetail: companyDetail,
  projectList: projectsTest,
  currentHiringProject: 3,
};

export const CandidateProjects: CandidateProject[] = [
  {
    ...project,
    startDate: 1708532861000,
    endDate: 1708532861000,
    status: "stopped",
    signature: "Thuan",
  },
  {
    ...project,
    startDate: 1708532861000,
    endDate: 1708532861000,
    status: "doing",
    signature: "Thuan",
  },
  {
    ...project,
    startDate: 1708532861000,
    endDate: 1708532861000,
    status: "contracting",
    signature: "",
  },
  {
    ...project,
    startDate: 1708532861000,
    endDate: 1708532861000,
    status: "verifying",
    signature: "",
  },
  {
    ...project,
    startDate: 1708532861000,
    endDate: 1708532861000,
    status: "denied",
    signature: "",
  },
];

export const EnterpriseProjects: EnterpriseProject[] = [
  { ...project, applicationCount: 5, candidateCount: 10, status: "hiring" },
  { ...project, applicationCount: 5, candidateCount: 10, status: "closed" },
  { ...project, applicationCount: 5, candidateCount: 10, status: "doing" },
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
    date: 1708532861000,
    id: "#15XE335NME",
    moneyAmount: 5000000,
    type: "cash-out",
  },
  {
    name: "Nguyễn Văn Cường",
    date: 1708532861000,
    id: "#15XE335NME",
    moneyAmount: 5000000,
    type: "transaction",
  },
];

export const Applicants: Applicant[] = [
  {
    id: "",
    projectId: "",
    candidateName: "Nguyễn Văn A",
    candidateId: "",
    date: 1708532861000,
    money: 0,
    time: 0,
    questions: [
      {
        question:
          "Bạn có thể cung cấp ví dụ về các dự án tương tự mà bạn đã hoàn thành trong quá khứ, và kết quả như thế nào không?",
        answer:
          "Dĩ nhiên, tôi đã hoàn thành nhiều dự án tương tự trước đây và đạt được các kết quả tích cực. Ví dụ, tôi đã làm việc trên một dự án phát triển trang web thương mại điện tử cho một khách hàng, và kết quả là họ đã tăng doanh số bán hàng của họ lên 30% sau khi trang web được triển khai. Tôi cũng có thể cung cấp một danh sách các dự án khác và chi tiết về kết quả nếu cần.",
      },
      {
        question:
          "Bạn tiếp cận thế nào với việc giao tiếp và hợp tác trong suốt vòng đời của dự án?",
        answer:
          "Tôi luôn coi trọng việc giao tiếp và hợp tác trong dự án. Tôi thường sử dụng các công cụ như email, tin nhắn trực tuyến và cuộc họp video để duy trì liên lạc với khách hàng và đồng nghiệp. Tôi sẽ thường xuyên cập nhật tiến độ của dự án và chia sẻ thông tin chi tiết để đảm bảo rằng mọi người đều được thông tin.",
      },
      {
        question:
          "Quy trình của bạn để xử lý sửa đổi hoặc phản hồi từ khách hàng như thế nào, và làm thế nào để đảm bảo sự hài lòng của khách hàng?",
        answer:
          "Khi nhận phản hồi từ khách hàng, tôi luôn mở lòng và sẵn lòng thực hiện các sửa đổi cần thiết để đáp ứng yêu cầu của họ. Tôi sẽ tiếp tục duy trì một quá trình giao tiếp mạnh mẽ với khách hàng để đảm bảo rằng họ hài lòng với kết quả cuối cùng. Nếu cần, tôi sẽ cung cấp các phiên bản thử nghiệm và cho phép khách hàng tham gia vào quá trình để đảm bảo rằng dự án đáp ứng mong đợi của họ.",
      },
    ],
  },
  {
    id: "",
    projectId: "",
    candidateName: "Võ Văn Khoai",
    candidateId: "",
    date: 1708532861000,
    money: 1000000,
    time: 90,
    questions: [
      {
        question:
          "Bạn có thể cung cấp ví dụ về các dự án tương tự mà bạn đã hoàn thành trong quá khứ, và kết quả như thế nào không?",
        answer:
          "Dĩ nhiên, tôi đã hoàn thành nhiều dự án tương tự trước đây và đạt được các kết quả tích cực. Ví dụ, tôi đã làm việc trên một dự án phát triển trang web thương mại điện tử cho một khách hàng, và kết quả là họ đã tăng doanh số bán hàng của họ lên 30% sau khi trang web được triển khai. Tôi cũng có thể cung cấp một danh sách các dự án khác và chi tiết về kết quả nếu cần.",
      },
      {
        question:
          "Bạn tiếp cận thế nào với việc giao tiếp và hợp tác trong suốt vòng đời của dự án?",
        answer:
          "Tôi luôn coi trọng việc giao tiếp và hợp tác trong dự án. Tôi thường sử dụng các công cụ như email, tin nhắn trực tuyến và cuộc họp video để duy trì liên lạc với khách hàng và đồng nghiệp. Tôi sẽ thường xuyên cập nhật tiến độ của dự án và chia sẻ thông tin chi tiết để đảm bảo rằng mọi người đều được thông tin.",
      },
      {
        question:
          "Quy trình của bạn để xử lý sửa đổi hoặc phản hồi từ khách hàng như thế nào, và làm thế nào để đảm bảo sự hài lòng của khách hàng?",
        answer:
          "Khi nhận phản hồi từ khách hàng, tôi luôn mở lòng và sẵn lòng thực hiện các sửa đổi cần thiết để đáp ứng yêu cầu của họ. Tôi sẽ tiếp tục duy trì một quá trình giao tiếp mạnh mẽ với khách hàng để đảm bảo rằng họ hài lòng với kết quả cuối cùng. Nếu cần, tôi sẽ cung cấp các phiên bản thử nghiệm và cho phép khách hàng tham gia vào quá trình để đảm bảo rằng dự án đáp ứng mong đợi của họ.",
      },
    ],
  },
];

export const contract: Contract = {
  candidateName: "Nguyen van a",
  candidateId: "1",
  projectName: "fpt",
  projectId: "1",
  date: 1708532861000,
  depositType: "full",
  fund: 200,
  status: "completed",
};

export const contractList: Contract[] = [contract];
