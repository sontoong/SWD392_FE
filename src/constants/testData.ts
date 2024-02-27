import { Comment } from "../app/models/comment";
import {
  Field,
  Project,
  Skill,
  OptionalRequirements,
} from "../app/models/project";
import { UserDetail } from "../app/models/user";

const skills: Skill[] = [
  { name: "Front-end Developer" },
  { name: "Back-end Developer" },
  { name: "Full-stack Developer" },
  { name: "Mobile Developer" },
  { name: "UI/UX Designer" },
  { name: "Data Scientist" },
  { name: "Data Engineer" },
];

const field: Field = {
  name: "name",
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
};

export const user: UserDetail = {
  id: "1",
  accountType: "Nguời ứng tuyển",
  dob: "01/01/2000",
  email: "nguyena@gmail.com",
  name: "Nguyễn Văn A",
  phone: "0123456789",
  address:
    "Đường D1, Đ. D1, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh 715650",
  nation: "vietnam",
  isVerified: true,
  averageRating: 3.5,
  ratingCount: 10,
  createdAt: "01/01/2000",
  description: `20 năm trong Full-Stack Development + UI/UX
Facebook: fb.com/user/JoeBiden`,
  desireSalary: 50000,
  language: ["English", "Vietnamese"],
  projectCount: 5,
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
